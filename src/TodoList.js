import React from 'react';
import Tasklist from './Tasklist';
import './style.css';
import TaskItem from './TaskItem';
import TaskInput from './TaskInput';
class TodoList extends React.Component {
    state = {
        tasks: [
            {
                id: 0,
                title: "Di hoc ReactJS",
                completed: true
            },
            {
                id: 1,
                title: "Di hoc NodeJS",
                completed: false
            },
            {
                id: 2,
                title: "Di mua khau trang ",
                completed: false
            }
        ],
        header: "TODO LIST"
    };
    addTask = (newTitle) => {
        const newItem = {
            id: Date.now(),
            title: newTitle,
            completed: false
        };
        const newTasks = [...this.state.tasks, newItem];
        this.setState({
            tasks: newTasks
        });
    };
    removeTask = (id) => {
        // const item = [...this.state.tasks];
        // const newItem = item.filter((it) => {
        //     if (id !== it.id) {
        //         return it;
        //     }
        // })
        const newTasks = this.state.tasks.filter(task => {
            return task.id !== id;
        });
        this.setState({
            tasks: newTasks
        });
    }
    toggleCompleted = id => {
        const taskIndex = this.state.tasks.findIndex(task => {
            return task.id === id;
        });
        const newTasks = [...this.state.tasks];
        newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
        //sap xep lai mang

        newTasks.sort((a, b) => {
            return a.completed - b.completed;
        });

        this.setState({ tasks: newTasks });
    };
    render() {
        return (
            <div className="todoList">
                <h1>{this.state.header}</h1>
                {/* <button onClick={this.addTask}>Add</button> */}
                <TaskInput addTask={this.addTask} />
                <Tasklist>
                    {this.state.tasks.length > 0 ?
                        this.state.tasks.map((task, index) => {
                            return <TaskItem
                                key={index}
                                id={task.id}
                                title={task.title}
                                completed={task.completed}
                                removeTask={this.removeTask}
                                toggleTask={this.toggleCompleted}></TaskItem>
                        }) : "No task for Today"}
                </Tasklist>
            </div>
        );
    }
}

export default TodoList; 
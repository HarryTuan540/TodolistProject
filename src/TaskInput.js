import React from 'react';
class TaskInput extends React.Component {
    //state - form
    state = {
        titleValue: ""
    }
    handleSubmit = event => {
        event.preventDefault();
    };
    handleClick = () => {
        if (this.state.titleValue.trim() === "") {
            alert("INPUT INVALID");
        }
        else {
            this.props.addTask(this.state.titleValue);
        }
    }
    handleChange = (event) => {
        this.setState({
            titleValue: event.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add</button>
            </form>
        );
    }
}
export default TaskInput;
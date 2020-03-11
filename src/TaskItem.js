import React from 'react';

export default class TaskItem extends React.Component {
    //   let line = "";
    //   if (props.completed) {
    //     line = "line-through";
    //   }
    //   const itemStyle = {
    //     textDecoration: line
    //   };
    //toan tu 3 ngoi
    //Condition ? true : false
    state = {
        timer: 0
    };
    interval = null;
    increaseTime = () => {
        console.log("increase");
        this.setState({ timer: this.state.timer + 1 })
    }
    componentDidMount() {
        this.interval = setInterval(this.increaseTime, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        const handleClickDelete = event => {
            event.stopPropagation();
            this.props.removeTask(this.props.id);
        };
        const handleClick = () => {
            this.props.toggleTask(this.props.id);
        };

        // const handleOnclick = () => {
        //     props.handleRemove(props.id)
        // }
        return (
            <li onClick={handleClick} style={{ textDecoration: this.props.completed ? "line-through" : "" }}>
                {/* CSS INLINE*/}
                {this.props.title} Time:{this.state.timer} <button onClick={handleClickDelete} className="btn btn-primary">X</button>
            </li>
        );
    }
}

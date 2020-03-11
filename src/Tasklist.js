import React from 'react';
import './style.css';

const Tasklist = props => {
    return <ul>{props.children}</ul>
};

export default Tasklist;
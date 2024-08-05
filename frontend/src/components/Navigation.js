import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create-task">Create Task</Link></li>
                <li><Link to="/updateTask">Update Task</Link></li>
                <li><Link to="/delete-task">Delete Task</Link></li>
                <li><Link to="/read-Task">Read Task</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;

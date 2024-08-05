import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTask } from '../redux/actions/taskActions';
import { useParams } from 'react-router-dom';

const TaskDetailView = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const task = useSelector(state => state.selectedTask);

    useEffect(() => {
        dispatch(fetchTask(id));
    }, [dispatch, id]);

    if (!task) return <div>Loading...</div>;

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
        </div>
    );
};

export default TaskDetailView;

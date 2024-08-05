import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask, fetchTask } from '../redux/actions/taskActions';
import { useParams, useHistory } from 'react-router-dom';

const TaskForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const task = useSelector(state => state.selectedTask);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if (id) {
            dispatch(fetchTask(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setStatus(task.status);
            setDueDate(task.dueDate.split('T')[0]);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = { title, description, status, dueDate };
        if (id) {
            dispatch(updateTask(id, taskData));
        } else {
            dispatch(createTask(taskData));
        }
        history.push('/');
    };

    return (
        <div>
            <h1>{id ? 'Edit Task' : 'Create Task'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Status</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div>
                    <label>Due Date</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{id ? 'Update Task' : 'Create Task'}</button>
            </form>
        </div>
    );
};

export default TaskForm;

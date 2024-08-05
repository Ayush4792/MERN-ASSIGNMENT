import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/actions/taskActions';

const TaskListView = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks); 
    const loading = useSelector((state) => state.tasks.loading);
    const error = useSelector((state) => state.tasks.error);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {Array.isArray(tasks) && tasks.map((task) => (
                    <li key={task._id}>
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskListView;

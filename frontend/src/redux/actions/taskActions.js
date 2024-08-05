import axios from 'axios';

export const fetchTasks = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/tasks');
        dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message });
    }
};

export const fetchTask = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`/api/tasks/${id}`);
        dispatch({ type: 'FETCH_TASK_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_TASK_FAILURE', payload: error.message });
    }
};

export const createTask = (taskData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/tasks', taskData);
        dispatch({ type: 'CREATE_TASK_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'CREATE_TASK_FAILURE', payload: error.message });
    }
};

export const updateTask = (id, taskData) => async (dispatch) => {
    try {
        const response = await axios.put(`/api/tasks/${id}`, taskData);
        dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'UPDATE_TASK_FAILURE', payload: error.message });
    }
};

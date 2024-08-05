const initialState = {
    tasks: [], // Ensure tasks is an array
    selectedTask: null,
    loading: false,
    error: null
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        // handle actions here
        default:
            return state;
    }
};

export default taskReducer;

const taskReducer = (state, action) => {
    switch (action.type) {
        case "OPEN_VIEW_TASK":
            return {
                ...state,
                taskModal: true,
                viewTask: action.payload,
                deleteTaskModal: false,
            };
        case "CLOSE_VIEW_TASK":
            return {
                ...state,
                taskModal: false,
                viewTask: null,
                deleteTaskModal: false,
            };
        case "OPEN_DELETE_TASK":
            return {
                ...state,
                deleteTaskModal: true,
                viewTask: state.viewTask,
                taskModal: false
            };
        case "CLOSE_DELETE_TASK":
            return {
                ...state,
                deleteTaskModal: false,
                viewTask: state.viewTask,
                taskModal: true
            };
        case "OPEN_EDIT_TASK":
            return {
                ...state,
                editTaskModal: true,
                taskModal: false,
            }
        case "CLOSE_EDIT_TASK":
            return {
                ...state,
                editTaskModal: false,
                taskModal: true,
            }
        case "EDIT_TASK":
            return {
                ...state,
                viewTask: action.payload,
            }
        default:
            return state;
    }
};

export default taskReducer;
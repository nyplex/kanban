const subTaskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_SUBTASK":
            if(state.subTasks.length >= 5) {
                return state;
            }
            return {
                ...state,
                subTasks: [
                    ...state.subTasks,
                    {
                        id: state.subTasks[state.subTasks.length - 1].id + 1,
                        text: action.payload,
                        status: "ongoing"
                    },
                ],
            };
        case "REMOVE_SUBTASK":
            if(state.subTasks.length <= 1) {
                return state;
            }
            return {
                ...state,
                subTasks: state.subTasks.filter(
                    (subTask) => subTask.id !== action.payload
                ),
            };
        case "CHANGE_SUBTASK_TEXT":
            return {
                ...state,
                subTasks: state.subTasks.map((subTask) => {
                    if (subTask.id === action.payload.id) {
                        return {
                            ...subTask,
                            text: action.payload.text,
                        };
                    }
                    return subTask;
                }),
            }
        default:
            return state;
    }
}

export default subTaskReducer;

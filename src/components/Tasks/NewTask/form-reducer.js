const formReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                input: {
                    value: action.value,
                    isInvalid: action.value.trim().length === 0 ? true : false, 
                },
            };
        case "INPUT_INVALID":
            return {
                ...state,
                input: {
                    value: action.payload.input.value,
                    isInvalid: action.payload.input.isInvalid,
                }
            }
        case "CHANGE_TEXTAREA":
            if(action.value.trim().length > 100) {
                return {
                    ...state,
                    textarea: {
                        value: state.textarea.value,
                        isInvalid: true,
                    }
                }
            }else if (action.value.trim().length === 0) {
                return {
                    ...state,
                    textarea: {
                        value: state.textarea.value,
                        isInvalid: true,
                    }
                }
            }else{
                return {
                    ...state,
                    textarea: {
                        value: action.value,
                        isInvalid: false,
                    }
                }
            }
        case "TEXTAREA_INVALID":
            return {
                ...state,
                textarea: {
                    value: action.payload.textarea.value,
                    isInvalid: action.payload.textarea.isInvalid,
                }
            }
        case "CHANGE_SELECT":
            if(action.value === "todo" || action.value === "doing" || action.value === "done") {
                return {
                    ...state,
                    select: {
                        value: action.value,
                        isInvalid: false,
                    }
                }
            }else{
                return {
                    ...state,
                    select: {
                        value: state.select.value,
                        isInvalid: true,
                    }
                }
            }
        case "SELECT_INVALID":
            return {
                ...state,
                select: {
                    value: action.payload.select.value,
                    isInvalid: action.payload.select.isInvalid,
                }
            }
        case "ADD_SUBTASK":
            console.log(action.payload.subTasks);
            return {
                ...state,
                subTasks: action.payload.subTasks,
            }
        default:
            return state;
    }
};

export default formReducer;

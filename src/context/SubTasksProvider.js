import React, { useReducer } from "react";
import SubTasksContext from "./subtasks-context";
import subTaskReducer from "./subtasks-reducer";

const SubTasksProvider = (props) => {
    const [subTasksState, dispatchSubTasks] = useReducer(subTaskReducer, {
        subTasks: [
            {
                id: 1,
                text: "",
            },
        ],
    });
    const changeSubTaskText = (id, text) => {
        dispatchSubTasks({
            type: "CHANGE_SUBTASK_TEXT",
            payload: {
                id,
                text,
            },
        });
    }
    const addSubTask = () => {
        dispatchSubTasks({
            type: "ADD_SUBTASK",
        });
    }
    const subTasksContext = {
        subTasks: subTasksState.subTasks,
        addSubTask: addSubTask,
        removeSubTask: (id) => {
            dispatchSubTasks({
                type: "REMOVE_SUBTASK",
                payload: id,
            });
        },
        changeSubTaskText: changeSubTaskText,
        setSubTasks: (subTasks) => {
            dispatchSubTasks({
                type: "SET_SUBTASKS",
                payload: subTasks,
            });
        }
    };
    return (
        <SubTasksContext.Provider value={subTasksContext}>
            {props.children}
        </SubTasksContext.Provider>
    );
};

export default SubTasksProvider;

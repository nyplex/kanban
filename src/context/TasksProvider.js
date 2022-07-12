import React, { useReducer } from "react";
import TasksContext from "./tasks-context";
import defaultTaskState from "../data/data";
import tasksReducer from "./tasks-reducer";


const TasksProvider = (props) => {
    const [tasksState, dispatchTasks] = useReducer(tasksReducer, {
        tasks: defaultTaskState,
        board: defaultTaskState.boards[0],
        boards: defaultTaskState.boards,
    });
    const changeBoard = (boardId) => {
        dispatchTasks({ type: "CHANGE_BOARD", payload: boardId });
    };
    const addNewBoard = (boardTitle) => {
        dispatchTasks({ type: "ADD_NEW_BOARD", playload: boardTitle });
    };
    const tasksContext = {
        tasks: tasksState.board.tasks,
        boards: tasksState.boards,
        currentBoard: tasksState.board,
        changeBoard: changeBoard,
        addNewBoard: addNewBoard,
    };

    return (
        <TasksContext.Provider value={tasksContext}>
            {props.children}
        </TasksContext.Provider>
    );
};

export default TasksProvider;

import React, { useReducer } from "react";
import TasksContext from "./tasks-context";
import defaultTaskState from "../data/data";
import tasksReducer from "./tasks-reducer";

const TasksProvider = (props) => {
    const [tasksState, dispatchTasks] = useReducer(tasksReducer, {
        board: defaultTaskState.boards[0],
        boards: defaultTaskState.boards,
    });
    const changeBoard = (boardId) => {
        dispatchTasks({ type: "CHANGE_BOARD", payload: boardId });
    };
    const addNewBoard = (boardTitle) => {
        dispatchTasks({ type: "ADD_NEW_BOARD", playload: boardTitle });
    };
    const deleteBoard = (boardId) => {
        dispatchTasks({ type: "DELETE_BOARD", payload: boardId });
    };
    const editBoard = (boardId, boardTitle) => {
        dispatchTasks({ type: "EDIT_BOARD", payload: { boardId, boardTitle } });
    };
    const addTask = (task, boardId) => {
        dispatchTasks({ type: "ADD_TASK", payload: { task, boardId } });
    };
    const deleteTask = (taskId, boardId) => {
        dispatchTasks({ type: "DELETE_TASK", payload: { taskId, boardId } });
    };
    const changeTaskStatus = (taskId, boardId, status) => {
        dispatchTasks({
            type: "CHANGE_TASK_STATUS",
            payload: { taskId: taskId, boardId: boardId, status: status },
        });
    };
    const changeSubTaskStatus = (taskId, boardId, subTaskId, status) => {
        dispatchTasks({
            type: "CHANGE_SUBTASK_STATUS",
            payload: {
                taskId: taskId,
                boardId: boardId,
                subTaskId: subTaskId,
                status: status,
            },
        });
    };
    const editTask = (taskId, boardId, task) => {
        dispatchTasks({
            type: "EDIT_TASK",
            payload: { taskId: taskId, boardId: boardId, task: task },
        });
    };
    const tasksContext = {
        boards: tasksState.boards,
        currentBoard: tasksState.board,
        changeBoard: changeBoard,
        addNewBoard: addNewBoard,
        deleteBoard: deleteBoard,
        editBoard: editBoard,
        addTask: addTask,
        deleteTask: deleteTask,
        changeTaskStatus: changeTaskStatus,
        changeSubTaskStatus: changeSubTaskStatus,
        editTask: editTask,
    };

    return (
        <TasksContext.Provider value={tasksContext}>
            {props.children}
        </TasksContext.Provider>
    );
};

export default TasksProvider;

const tasksReducer = (state, action) => {
    let updatedBoards;
    switch (action.type) {
        case "CHANGE_BOARD":
            return {
                board: state.boards.find(
                    (board) => board.boardId === action.payload
                ),
                boards: state.boards,
            };
        case "ADD_NEW_BOARD":
            updatedBoards = {
                ...state,
                boards: [
                    ...state.boards,
                    {
                        boardTitle: action.playload,
                        boardId: state.boards.length + 1,
                        tasks: [],
                    },
                ],
            };
            return {
                board: updatedBoards.boards[updatedBoards.boards.length - 1],
                boards: updatedBoards.boards,
            };
        case "DELETE_BOARD":
            const NewBoards = state.boards.filter((board) => {
                return board.boardId !== action.payload;
            });
            updatedBoards = {
                ...state,
                boards: NewBoards,
            };
            return {
                board: updatedBoards.boards[0],
                boards: updatedBoards.boards,
            };
        case "EDIT_BOARD":
            updatedBoards = {
                ...state,
                boards: state.boards.map((board) => {
                    if (board.boardId === action.payload.boardId) {
                        return {
                            ...board,
                            boardTitle: action.payload.boardTitle,
                        };
                    }
                    return board;
                }),
            };
            return {
                board: updatedBoards.boards.find(
                    (board) => board.boardId === action.payload.boardId
                ),
                boards: updatedBoards.boards,
            };
        case "ADD_TASK":
            updatedBoards = {
                ...state,
                boards: state.boards.map((board) => {
                    if (board.boardId === action.payload.boardId) {
                        if(board.tasks.length === 0) {
                            return {
                                ...board,
                                tasks: [action.payload.task],
                            };
                        }else{
                            return {
                                ...board,
                                tasks: [...board.tasks, action.payload.task],
                            };
                        }
                    }
                    return board;
                }),
            };
            return {
                board: updatedBoards.boards.find(
                    (board) => board.boardId === action.payload.boardId
                ),
                boards: updatedBoards.boards,
            };
        case "DELETE_TASK":
            updatedBoards = {
                ...state,
                boards: state.boards.map((board) => {
                    if (board.boardId === action.payload.boardId) {
                        return {
                            ...board,
                            tasks: board.tasks.filter(
                                (task) => task.id !== action.payload.taskId
                            ),
                        };
                    }
                    return board;
                }),
            };
            return {
                board: updatedBoards.boards.find(
                    (board) => board.boardId === action.payload.boardId
                ),
                boards: updatedBoards.boards,
            };

        case "CHANGE_TASK_STATUS":
            updatedBoards = {
                ...state,
                boards: state.boards.map((board) => {
                    if (board.boardId === action.payload.boardId) {
                        return {
                            ...board,
                            tasks: board.tasks.map((task) => {
                                if (task.id === action.payload.taskId) {
                                    return {
                                        ...task,
                                        status: action.payload.status,
                                    };
                                }
                                return task;
                            }),
                        };
                    }
                    return board;
                }),
            };
            return {
                board: updatedBoards.boards.find(
                    (board) => board.boardId === action.payload.boardId
                ),
                boards: updatedBoards.boards,
            };

        case "CHANGE_SUBTASK_STATUS":
            updatedBoards = {
                ...state,
                boards: state.boards.map((board) => {
                    if (board.boardId === action.payload.boardId) {
                        return {
                            ...board,
                            tasks: board.tasks.map((task) => {
                                if (task.id === action.payload.taskId) {
                                    return {
                                        ...task,
                                        subtasks: task.subtasks.map(
                                            (subTask) => {
                                                if (
                                                    subTask.id ===
                                                    action.payload.subTaskId
                                                ) {
                                                    return {
                                                        ...subTask,
                                                        status: action.payload
                                                            .status,
                                                    };
                                                }
                                                return subTask;
                                            }
                                        ),
                                    };
                                }
                                return task;
                            }),
                        };
                    }
                    return board;
                }),
            };
            return {
                board: updatedBoards.boards.find(
                    (board) => board.boardId === action.payload.boardId
                ),
                boards: updatedBoards.boards,
            };
        case "EDIT_TASK":
            
            updatedBoards = {
                ...state,
                boards: state.boards.map((board) => {
                    if (board.boardId === action.payload.boardId) {
                        return {
                            ...board,
                            tasks: board.tasks.map((task) => {
                                if (task.id === action.payload.taskId) {
                                    return action.payload.task
                                }
                                return task;
                            }),
                        };
                    }
                    return board;
                }),
            };
            return {
                board: updatedBoards.boards.find(
                    (board) => board.boardId === action.payload.boardId
                ),
                boards: updatedBoards.boards,
            };

        default:
            return state;
    }
};

export default tasksReducer;

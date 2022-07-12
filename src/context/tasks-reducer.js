const tasksReducer = (state, action) => {
    let updatedBoards;
    switch (action.type) {
        case "CHANGE_BOARD":
            return {
                tasks: state,
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
                        tasks: [{}],
                    },
                ],
            };
            return {
                tasks: updatedBoards,
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
                tasks: updatedBoards,
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
                })
            }
            return {
                tasks: updatedBoards,
                board: updatedBoards.boards.find(
                    (board) => board.boardId === action.payload.boardId
                ),
                boards: updatedBoards.boards
            }

        default:
            return state;
    }
};

export default tasksReducer;

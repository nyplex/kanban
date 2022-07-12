const tasksReducer = (state, action) => {
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
            let updatedBoards = {
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
            console.log(updatedBoards);
            return {
                tasks: updatedBoards,
                board: updatedBoards.boards[updatedBoards.boards.length - 1],
                boards: updatedBoards.boards,
            };
        default:
            return state;
    }
};

export default tasksReducer;
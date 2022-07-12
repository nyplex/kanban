import classes from "./SideBar.module.css";
import boardIcon from "../UI/boardIcon.svg";
import { Fragment, useContext, useState } from "react";
import NewBoard from "./NewBoard/NewBoard";
import TasksContext from "../../context/tasks-context";

const SideBar = (props) => {
    const [newBoardIsShown, setNewBoardIsShown] = useState(false);
    const tasksContext = useContext(TasksContext);

    const changeBoardHandler = (boardId) => {
        tasksContext.changeBoard(boardId);
    };

    return (
        <Fragment>
            <div>
                <div className={classes.sideBar}>
                    <h3>ALL BOARDS ({tasksContext.boards.length})</h3>

                    <div className={classes.boardItemsContainer}>
                        {tasksContext.boards.map((board) => (
                            <div
                                key={board.boardId}
                                onClick={changeBoardHandler.bind(
                                    null,
                                    board.boardId
                                )}
                                className={`${classes.item} ${
                                    tasksContext.currentBoard.boardId ===
                                    board.boardId
                                        ? classes.active
                                        : ""
                                }`}
                            >
                                <img src={boardIcon} alt="Board icon" />
                                <span>{board.boardTitle}</span>
                            </div>
                        ))}
                        <div
                            className={classes.item}
                            onClick={() => setNewBoardIsShown(true)}
                        >
                            <img src={boardIcon} alt="Board icon" />
                            <span className="text-mainPurple">
                                + Create New Board
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {newBoardIsShown && (
                <NewBoard onClose={() => setNewBoardIsShown(false)} />
            )}
        </Fragment>
    );
};

export default SideBar;

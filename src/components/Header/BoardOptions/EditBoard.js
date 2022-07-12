import React, { useState } from "react";
import TasksContext from "../../../context/tasks-context";
import Button from "../../UI/Interactive/Button";
import Modal from "../../UI/Modal";
import styles from "../../SideBar/NewBoard/NewBoard.module.css";

const EditBoard = (props) => {
	const tasksContext = React.useContext(TasksContext)
    const [isInvalid, setIsInvalid] = useState(null);
    const [boardName, setBoardName] = useState(tasksContext.currentBoard.boardTitle);
  	const addNewBoardHandler = (event) => {
		event.preventDefault();
        if (boardName.trim().length === 0) {
            setIsInvalid(true);
            return;
        }
        tasksContext.editBoard(tasksContext.currentBoard.boardId, boardName);
		props.onClose()
	}
    const onChangeNameHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setIsInvalid(true);
        } else {
            setIsInvalid(null);
        }
        setBoardName(event.target.value);
    };
    return (
        <Modal onClose={props.onClose}>
            <div className={styles["boardModal__header"]}>
                <h2>Edit Board</h2>
            </div>
            <form onSubmit={addNewBoardHandler} className="mt-[24px]">
                <div>
                    <div className="text-field__idle">
                        <label>Name</label>
                        <input
                            name="boardName"
                            type="text"
                            placeholder="e.g. Web Design"
							value={boardName}
							onChange={onChangeNameHandler}
                            className={`${isInvalid && "invalid"}`}
                        />
                        {isInvalid && (
                            <span className="invalid">Can't be empty</span>
                        )}
                    </div>
                    <Button
                        type={"submit"}
                        classes={styles["boardModal__primaryBtn"]}
                    >
                        Create New Board
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default EditBoard;

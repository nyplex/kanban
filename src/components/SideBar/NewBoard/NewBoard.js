import React from "react";
import TasksContext from "../../../context/tasks-context";
import Button from "../../UI/Interactive/Button";
import Modal from "../../UI/Modal";
import styles from "./NewBoard.module.css";

const NewBoard = (props) => {
	const [boardName, setBoardName] = React.useState("");
	const tasksContext = React.useContext(TasksContext)
  	const addNewBoardHandler = (event) => {
		event.preventDefault();
		tasksContext.addNewBoard(boardName);
		props.onClose()
	}
    return (
        <Modal onClose={props.onClose}>
            <div className={styles["boardModal__header"]}>
                <h2>Add New Board</h2>
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
							onChange={(e) => setBoardName(e.target.value)}
                            // className={`${isInvalid && "invalid"}`}
                        />
                        {/* {isInvalid && (
                            <span className="invalid">Can't be empty</span>
                        )} */}
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

export default NewBoard;

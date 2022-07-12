import React, { useContext } from "react";
import Button from "../../UI/Interactive/Button";
import Modal from "../../UI/Modal";
import TasksContext from "../../../context/tasks-context";
import classes from "./Options.module.css";

const DeleteBoard = (props) => {
    const tasksContext = useContext(TasksContext);
    const deleteBoardHandler = () => {
        tasksContext.deleteBoard(tasksContext.currentBoard.boardId);
        props.onClose();
    };
    return (
        <Modal onClose={props.onClose}>
            <div>
                <h2 className="heading__l text-red">Delete this board?</h2>
                <p className="body__l text-mediumGrey mt-[24px]">
                    Are you sure you want to delete the '
                    {tasksContext.currentBoard.boardTitle}' board? This action
                    will remove all columns and tasks and cannot be reversed.
                </p>
                <div className="flex flex-row justify-between mt-[24px]">
                    <Button
                        type={"button"}
                        classes={classes["btn__delete"]}
                        onClick={deleteBoardHandler}
                    >
                        Delete
                    </Button>
                    <Button
                        id={"cancelDeletionBtn"}
                        type={"button"}
                        classes={classes["btn__cancel"]}
                        onClick={props.onClose}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteBoard;

import React, { useContext } from "react";
import TasksContext from "../../../context/tasks-context";
import Button from "../../UI/Interactive/Button";
import Modal from "../../UI/Modal";
import { TaskContext } from "../TasksColumn";
import classes from "./ViewTask.module.css";

const DeleteTask = (props) => {
    const taskContext = useContext(TaskContext)
    const tasksContext = useContext(TasksContext)
    const deleteTaskHandler = () => {
        taskContext({ type: "CLOSE_VIEW_TASK" })
        tasksContext.deleteTask(props.task.id, tasksContext.currentBoard.boardId)
    }
    return (
        <Modal onClose={() => {
            taskContext({ type: "CLOSE_DELETE_TASK" })
        }}>
            <div>
                <h2 className="heading__l text-red">Delete this task?</h2>
                <p className="body__l text-mediumGrey mt-[24px]">
                    Are you sure you want to delete the '
                    {props.task.taskTitle}' task? This action cannot be reversed.
                </p>
                <div className="flex flex-row justify-between mt-[24px]">
                    <Button
                        type={"button"}
                        classes={classes["btn__delete"]}
                        onClick={deleteTaskHandler}
                    >
                        Delete
                    </Button>
                    <Button
                        id={"cancelDeletionBtn"}
                        type={"button"}
                        classes={classes["btn__cancel"]}
                        onClick={() => {
                            taskContext({ type: "CLOSE_DELETE_TASK" })
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteTask;

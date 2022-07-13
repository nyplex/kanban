import React, { Fragment, useContext } from "react";
import { TaskContext } from "../TasksColumn";
import classes from "./ViewTask.module.css";

const ViewTaskOptions = (props) => {
    const taskContext = useContext(TaskContext)
    const taskOptionHandler = (event) => {
        if (event.target.id === "taskOption__bg") {
            props.onClose();
            return;
        }
    };
    const openDeleteModalHandler = (task) => {
        taskContext({ type: "OPEN_DELETE_TASK", payload: task });
    }
    const openEditModalHandler = (task) => {
        taskContext({ type: "OPEN_EDIT_TASK", payload: task });
    }
    return (
        <Fragment>
            <div
                id="taskOption__bg"
                className={classes["boardOptions__bg"]}
                onClick={taskOptionHandler}
            >
                <div className={classes.boardOptions}>
                    <button type="button" className="mb-[16px] text-mediumGrey" onClick={openEditModalHandler}>
                        Edit Task
                    </button>
                    <button type="button" className="text-red" onClick={openDeleteModalHandler}>
                        Delete Task
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default ViewTaskOptions;

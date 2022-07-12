import React from "react";
import classes from "./ViewTask.module.css";

const ViewTaskOptions = (props) => {
    return (
        <div
            id="boardOption__bg"
            className={classes["boardOptions__bg"]}
            onClick={props.onClose}
        >
            <div className={classes.boardOptions}>
                <button type="button" className="mb-[16px] text-mediumGrey">
                    Edit Task
                </button>
                <button type="button" className="text-red">
                    Delete Task
                </button>
            </div>
        </div>
    );
};

export default ViewTaskOptions;

import React from "react";
import classes from "./Options.module.css";

const Options = (props) => {
    const boardOptionHandler = (event) => {
        if (event.target.id === "boardOption__bg") {
            props.onClose();
            return;
        }
    };
    return (
        <div
            onClick={boardOptionHandler}
            id="boardOption__bg"
            className={classes["boardOptions__bg"]}
        >
            <div className={classes.boardOptions}>
                <button type="button" className="mb-[16px] text-mediumGrey">
                    Edit Board
                </button>
                <button type="button" className="text-red">
                    Delete Board
                </button>
            </div>
        </div>
    );
};

export default Options;

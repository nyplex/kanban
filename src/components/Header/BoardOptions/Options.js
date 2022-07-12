import React, { Fragment, useState } from "react";
import classes from "./Options.module.css";
import DeleteBoard from "./DeleteBoard";
import EditBoard from "./EditBoard";

const Options = (props) => {
    const [deleteModalisShown, setDeleteModalisShown] = useState(false);
    const [editModalisShown, setEditModalisShown] = useState(false);
    const boardOptionHandler = (event) => {
        if (event.target.id === "boardOption__bg") {
            props.onClose();
            return;
        }
    };

    return (
        <Fragment>
            <div
                onClick={boardOptionHandler}
                id="boardOption__bg"
                className={classes["boardOptions__bg"]}
            >
                <div className={classes.boardOptions}>
                    <button
                        type="button"
                        className="mb-[16px] text-mediumGrey"
                        onClick={() => setEditModalisShown(true)}
                    >
                        Edit Board
                    </button>
                    <button
                        type="button"
                        className="text-red"
                        onClick={() => setDeleteModalisShown(true)}
                    >
                        Delete Board
                    </button>
                </div>
            </div>
            {deleteModalisShown && <DeleteBoard onClose={props.onClose} />}
            {editModalisShown && <EditBoard onClose={props.onClose} />}
        </Fragment>
    );
};

export default Options;

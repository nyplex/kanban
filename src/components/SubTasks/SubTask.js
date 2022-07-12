import React, { useState, useContext } from "react";
import Button from "../UI/Interactive/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./SubTasksContainer.module.css";
import SingleInput from "../UI/Interactive/SingleInput";
import SubTasksContext from "../../context/subtasks-context";

const SubTask = (props) => {
    const [isInvalid, setIsInvalid] = useState(false);
    const [text, setText] = useState("");
    const subTasksContext = useContext(SubTasksContext);

    const removeSubTaskHandler = (e) => {
        e.preventDefault();
        subTasksContext.removeSubTask(props.id);
    };
    const changeSubTaskTextHandler = (e) => {
        e.preventDefault();
        if(e.target.value.length > 80) {
            setIsInvalid(true);
            return
        }
        setText(e.target.value);
        subTasksContext.changeSubTaskText(props.id, e.target.value);
    }
    return (
        <div className="mt-[8px]" id={props.id}>
            <div className="text-field__idle flex flex-row gap-3">
                <input
                    type="text"
                    placeholder="e.g. Make coffee"
                    maxLength="80"
                    value={text}
                    onChange={changeSubTaskTextHandler}
                    className={`${isInvalid && 'invalid'}`}
                />
                <Button
                    type="button"
                    classes={classes.closeBtn}
                    onClick={removeSubTaskHandler}
                >
                    <FontAwesomeIcon icon={faXmark} size="xl" />
                </Button>
            </div>
        </div>
    );
};

export default SubTask;

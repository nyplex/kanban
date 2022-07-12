import React from "react";
import Modal from "../../UI/Modal";
import classes from "./ViewTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../UI/Interactive/Button";
import ViewTaskOptions from "./ViewTaskOptions";

const ViewTask = (props) => {
    const [taskStatus, setTaskStatus] = React.useState(props.task.status);
    const [taskOptionsShown, setTaskOptionsShown] = React.useState(false);
    const completedSubTasks = props.task.subtasks
        .filter((subTask) => subTask.status === "complete")
        .length.toString();

    const onChangeStatusHandler = (event) => {
        setTaskStatus(event.target.value);
    };

    return (
        <Modal onClose={props.onClose}>
            <div className={classes["boardModal__header"]}>
                <h2 className="flex-1">{props.task.taskTitle}</h2>
                <Buttons
                    onClick={() =>
                        setTaskOptionsShown((prevState) => !prevState)
                    }
                >
                    <FontAwesomeIcon size="xl" icon={faEllipsisVertical} />
                </Buttons>
            </div>
            <div className={classes["boardModal__content"]}>
                <p>{props.task.description}</p>
                <h3>
                    Subtasks ({completedSubTasks} of{" "}
                    {props.task.subtasks.length.toString()})
                </h3>
            </div>
            <div className={classes["subtasks_container"]}>
                {props.task.subtasks.map((subTask) => (
                    <div className="checkbox__iddle w-full" key={subTask.id}>
                        <input type="checkbox" />
                        <span>{subTask.text}</span>
                    </div>
                ))}
            </div>
            <div className="dropwdown-menu__idle w-full mt-[24px]">
                <label>Status</label>
                <select value={taskStatus} onChange={onChangeStatusHandler}>
                    <option value="todo">Todo</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
            </div>
            {taskOptionsShown && (
                <ViewTaskOptions onClose={() => setTaskOptionsShown(false)} />
            )}
        </Modal>
    );
};

export default ViewTask;

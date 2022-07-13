import React, { useContext } from "react";
import Modal from "../../UI/Modal";
import classes from "./ViewTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../UI/Interactive/Button";
import ViewTaskOptions from "./ViewTaskOptions";
import TasksContext from "../../../context/tasks-context";
import { TaskContext } from "../TasksColumn";
import SubTask from "./SubTask";

const ViewTask = (props) => {
    
    const tasksContext = useContext(TasksContext);
    const taskContext = useContext(TaskContext)
    const [taskStatus, setTaskStatus] = React.useState(props.task.status);
    const [taskOptionsShown, setTaskOptionsShown] = React.useState(false);
    const completedSubTasks = props.task.subtasks
        .filter((subTask) => subTask.status === "complete")
        .length.toString();

    const onChangeStatusHandler = (event) => {
        const status = event.target.value;
        if (status !== "todo" && status !== "doing" && status !== "done") {
            return;
        }
        setTaskStatus(status);
        tasksContext.changeTaskStatus(
            props.task.id,
            tasksContext.currentBoard.boardId,
            status
        );
        taskContext({ type: "CLOSE_VIEW_TASK" })
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
                    <SubTask
                        key={subTask.id}
                        subTask={subTask}
                        task={props.task}
                    />
                ))}
            </div>
            <div className="dropwdown-menu__idle w-full mt-[24px]">
                <label>Status</label>
                <select value={props.task.status} onChange={onChangeStatusHandler}>
                    <option value="todo">Todo</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
            </div>
            {taskOptionsShown && (
                <ViewTaskOptions
                    task={props.task}
                    onClose={() => setTaskOptionsShown(false)}
                />
            )}
        </Modal>
    );
};

export default ViewTask;

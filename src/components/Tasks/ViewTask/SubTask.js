import React, { useContext } from "react";
import TasksContext from "../../../context/tasks-context";

const SubTask = (props) => {
    const tasksContext = useContext(TasksContext)
    const [isChecked, setIsChecked] = React.useState(props.subTask.status === "complete" ? true : false);
    const changeSubTaskStatusHandler = (event) => {
        setIsChecked((prevState) => !prevState);
        tasksContext.changeSubTaskStatus(
            props.task.id,
            tasksContext.currentBoard.boardId,
            props.subTask.id,
            isChecked ? "ongoing" : "complete"
        )
    }
    return (
        <div
            className={`checkbox__iddle w-full ${isChecked && "completed"}`} onClick={changeSubTaskStatusHandler}
        >
            <input
                type="checkbox"
                checked={isChecked}
                readOnly={true}
            />
            <span>{props.subTask.text}</span>
        </div>
    );
};

export default SubTask;

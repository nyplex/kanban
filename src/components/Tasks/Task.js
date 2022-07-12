import classes from "./Task.module.css";

const Task = (props) => {
    return (
        <div onClick={props.onClick} className={`${classes.taskCard} group`}>
            <h4 className="group-hover:text-mainPurple">{props.task.taskTitle}</h4>
            <span>{props.task.subtasks.length} substasks</span>
        </div>
    )
};

export default Task;
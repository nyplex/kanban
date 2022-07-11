import classes from "./Task.module.css";

const Task = (props) => {
    return (
        <div className={`${classes.taskCard} group`}>
            <h4 className="group-hover:text-mainPurple">{props.task.title}</h4>
            <span>3 substasks</span>
        </div>
    )
};

export default Task;
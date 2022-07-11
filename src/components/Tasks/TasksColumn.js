import classes from "./TasksColumn.module.css";
import Task from "./Task";

const TasksColumn = (props) => {
    return (
        <div className="max-w-[280px]">
            <div className={classes.tasksHeader}>
                <div className="bg-[#49C4E5]"></div>
                <span className="heading__s text-mediumGrey">
                    {props.value}
                </span>
            </div>
            {props.tasks.map((task) => (
                <Task task={task.task} key={task.id}/>
            ))}
        </div>
    );
};

export default TasksColumn;

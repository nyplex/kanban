import classes from "./TasksColumn.module.css";
import Task from "./Task";

const TasksColumn = (props) => {
    let color = 'bg-[#49C4E5]'
    if(props.value === 'DONE') {
        color = 'bg-[#67E2AE]'
    }else if (props.value === 'DOING') {
        color = 'bg-[#8471F2]'
    }
    return (
        <div className="max-w-[280px]">
            <div className={classes.tasksHeader}>
                <div className={color}></div>
                <span className="heading__s text-mediumGrey">
                    {props.value}
                </span>
            </div>
            {props.tasks.map((task) => (
                <Task task={task} key={task.id}/>
            ))}
        </div>
    );
};

export default TasksColumn;

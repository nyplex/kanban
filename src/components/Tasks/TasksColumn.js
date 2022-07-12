import classes from "./TasksColumn.module.css";
import Task from "./Task";
import { Fragment, useState } from "react";
import ViewTask from "./ViewTask/ViewTask";


const TasksColumn = (props) => {
    const [isViewTaskOpen, setIsViewTaskOpen] = useState(false);
    const [viewTask, setViewTask] = useState(null);

    let color = "bg-[#49C4E5]";
    if (props.value === "DONE") {
        color = "bg-[#67E2AE]";
    } else if (props.value === "DOING") {
        color = "bg-[#8471F2]";
    }
    const openViewTaskHandler = (task) => {
        setViewTask(task);
        setIsViewTaskOpen(true);
    };
    return (
        <Fragment>
            <div className="max-w-[280px]">
                <div className={classes.tasksHeader}>
                    <div className={color}></div>
                    <span className="heading__s text-mediumGrey">
                        {props.value}
                    </span>
                </div>
                {props.tasks.map((task) => (
                    <Task
                        task={task}
                        key={task.id}
                        onClick={() => {
                            openViewTaskHandler(task);
                        }}
                    />
                ))}
            </div>
            {isViewTaskOpen && (
                <ViewTask
                    task={viewTask}
                    onClose={() => setIsViewTaskOpen(false)}
                />
            )}
        </Fragment>
    );
};

export default TasksColumn;

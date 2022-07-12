import { useContext } from "react";
import TasksContext from "../../context/tasks-context";
import classes from "./Tasks.module.css";
import TasksColumn from "./TasksColumn";

const Tasks = (props) => {
    const tasksContext = useContext(TasksContext);
    const taskTodo = tasksContext.tasks.filter(
        (task) => task.status === "todo"
    );
    const taskDoing = tasksContext.tasks.filter(
        (task) => task.status === "doing"
    );
    const taskDone = tasksContext.tasks.filter(
        (task) => task.status === "done"
    );

    return (
        <div className={classes.tasksContainer}>
            <TasksColumn tasks={taskTodo} value="TODO" />
            <TasksColumn tasks={taskDoing} value="DOING" />
            <TasksColumn tasks={taskDone} value="DONE" />
        </div>
    );
};

export default Tasks;

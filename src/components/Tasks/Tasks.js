import { useContext } from "react";
import TasksContext from "../../context/tasks-context";
import classes from "./Tasks.module.css";
import TasksColumn from "./TasksColumn";

const Tasks = (props) => {
    const tasksContext = useContext(TasksContext);
    
    const taskTodo = tasksContext.currentBoard.tasks.filter(
        (task) => task.status === "todo"
    );
    const taskDoing = tasksContext.currentBoard.tasks.filter(
        (task) => task.status === "doing"
    );
    const taskDone = tasksContext.currentBoard.tasks.filter(
        (task) => task.status === "done"
    );

    return (
        <div className={classes.tasksContainer}>
            <TasksColumn tasks={taskTodo} value="TODO" color="bg-[#49C4E5]"/>
            <TasksColumn tasks={taskDoing} value="DOING" color="bg-[#8471F2]"/>
            <TasksColumn tasks={taskDone} value="DONE" color="bg-[#67E2AE]"/>
        </div>
    );
};

export default Tasks;

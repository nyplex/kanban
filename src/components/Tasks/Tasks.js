import classes from "./Tasks.module.css";
import TasksColumn from "./TasksColumn";

const Tasks = (props) => {
    const data = [
        { task: { title: "task name" }, status: "todo", id:"1" },
        { task: { title: "task name" }, status: "doing", id:"2" },
        { task: { title: "task name" }, status: "todo", id:"5" },
        { task: { title: "task name" }, status: "done", id:"3" },
        { task: { title: "task name" }, status: "todo", id:"4" },
    ];

    const taskTodo = data.filter((task) => task.status === "todo");
    const taskDoing = data.filter((task) => task.status === "doing");
    const taskDone = data.filter((task) => task.status === "done");
    

    return (
        <div className={classes.tasksContainer}>
            <TasksColumn tasks={taskTodo} value="TODO"/>
            <TasksColumn tasks={taskDoing} value="DOING"/>
            <TasksColumn tasks={taskDone} value="DONE" />
        </div>
    );
};

export default Tasks;

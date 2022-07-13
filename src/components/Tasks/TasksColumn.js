import classes from "./TasksColumn.module.css";
import Task from "./Task";
import {
    createContext,
    Fragment,
    useEffect,
    useReducer,
    useContext,
    useState,
} from "react";
import ViewTask from "./ViewTask/ViewTask";
import DeleteTask from "./ViewTask/DeleteTask";
import taskReducer from "./task-reducer";
import EditTask from "./ViewTask/EditTask";
import TasksContext from "../../context/tasks-context";
export const TaskContext = createContext();

const TasksColumn = (props) => {
    const tasksContext = useContext(TasksContext);
    const [CurentTask ,setTask] = useState(tasksContext.currentBoard.tasks[0])
    const [taskState, dispatchTaskAction] = useReducer(taskReducer, {
        viewTask: null,
        taskModal: false,
        deleteTaskModal: false,
        editTaskModal: false,
    });

    useEffect(() => {
        dispatchTaskAction({
            type: "EDIT_TASK",
            payload: tasksContext.currentBoard.tasks.find(
                (task) => task.id === CurentTask.id
            ),
        });
    }, [tasksContext, CurentTask.id]);

    const openViewTaskHandler = (task) => {
        dispatchTaskAction({ type: "OPEN_VIEW_TASK", payload: task });
        setTask(task)
    };

    return (
        <Fragment>
            <TaskContext.Provider value={dispatchTaskAction}>
                <div className="max-w-[300px] min-w-[300px]">
                    <div className={classes.tasksHeader}>
                        <div className={props.color}></div>
                        <span className="heading__s text-mediumGrey">
                            {props.value}
                        </span>
                    </div>
                    {props.tasks.length <= 0 ? (
                        <div className="w-full h-[75%] relative">
                            <h1 className="heading__m text-mediumGrey absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-left">
                                THIS COLUMN IS EMPTY.
                            </h1>
                        </div>
                    ) : (
                        props.tasks.map((task) => (
                            <Task
                                task={task}
                                key={task.id}
                                onClick={() => {
                                    openViewTaskHandler(task);
                                }}
                            />
                        ))
                    )}
                </div>
                {taskState.taskModal && (
                    <ViewTask
                        task={taskState.viewTask}
                        onClose={() => {
                            dispatchTaskAction({ type: "CLOSE_VIEW_TASK" });
                        }}
                    />
                )}
                {taskState.deleteTaskModal && (
                    <DeleteTask task={taskState.viewTask} />
                )}
                {taskState.editTaskModal && (
                    <EditTask task={taskState.viewTask} />
                )}
            </TaskContext.Provider>
        </Fragment>
    );
};

export default TasksColumn;

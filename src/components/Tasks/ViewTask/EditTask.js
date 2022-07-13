import React, { useContext } from "react";
import SubTasksProvider from "../../../context/SubTasksProvider";
import Modal from "../../UI/Modal";
import classes from "./NewTask.module.css";
import EditTaskForm from "./EditTaskForm";
import { TaskContext } from "../TasksColumn";

const EditTask = (props) => {
    const taskContext = useContext(TaskContext);
    return (
        <SubTasksProvider>
            <Modal
                onClose={() => {
                    taskContext({ type: "CLOSE_EDIT_TASK" });
                }}
            >
                <div className={classes["boardModal__header"]}>
                    <h2>Edit Task</h2>
                </div>
                <EditTaskForm task={props.task} onClose={() => {
                    taskContext({ type: "CLOSE_EDIT_TASK" });
                }} />
            </Modal>
        </SubTasksProvider>
    );
};

export default EditTask;

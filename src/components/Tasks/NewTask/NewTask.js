import React from "react";
import SubTasksProvider from "../../../context/SubTasksProvider";
import Modal from "../../UI/Modal";
import classes from "./NewTask.module.css";
import NewTaskForm from "./NewTaskForm";

const NewTask = (props) => {
    return (
        <SubTasksProvider>
            <Modal onClose={props.onClose}>
                <div className={classes["boardModal__header"]}>
                    <h2>Add New Task</h2>
                </div>
                <NewTaskForm onClose={props.onClose} />
            </Modal>
        </SubTasksProvider>
    );
};

export default NewTask;

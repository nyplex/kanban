import React, { useContext, useEffect } from "react";
import SubTasksContext from "../../context/subtasks-context";
import Button from "../UI/Interactive/Button";
import SubTask from "./SubTask";

const SubTasksContainer = (props) => {
    const subTasksContext = useContext(SubTasksContext);

    useEffect(() => {
        if(props.isEdit === true) {
            if(subTasksContext.subTasks.length === 0) {
                subTasksContext.addSubTask()
            }else{
                subTasksContext.setSubTasks(props.task.subtasks);
            }   
        }
    }, [])

    const addNewSubTaskHandler = (event) => {
        event.preventDefault()
        subTasksContext.addSubTask();
    }

    return (
        <div>
            <label className="block mb-[8px] mt-[24px] body__m text-mediumGrey dark:text-white">
                Subtasks
            </label>
            {subTasksContext.subTasks.map((subTask) => (
                <SubTask
                    key={subTask.id}
                    id={subTask.id}
                    text={subTask.text}
                    subtask={subTask}
                    isEdit={props.isEdit}
                />
            ))}

            {subTasksContext.subTasks.length < 5 && (
                <Button
                    type="button"
                    onClick={addNewSubTaskHandler}
                    classes="btn-secondary w-full mt-[12px]"
                >
                    + Add New Subtask
                </Button>
            )}
        </div>
    );
};

export default SubTasksContainer;

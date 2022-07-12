import React, { useContext } from "react";
import SubTasksContext from "../../context/subtasks-context";
import Button from "../UI/Interactive/Button";
import SubTask from "./SubTask";

const SubTasksContainer = (props) => {
    const subTasksContext = useContext(SubTasksContext);


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

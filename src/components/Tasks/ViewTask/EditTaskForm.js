import React, { useContext, useReducer } from "react";
import Input from "../../UI/Interactive/Input";
import TextArea from "../../UI/Interactive/TextArea";
import Button from "../../UI/Interactive/Button";
import classes from "./NewTask.module.css";
import formReducer from "../NewTask/form-reducer";
import SubTasksContainer from "../../SubTasks/SubTasksContainer";
import SubTasksContext from "../../../context/subtasks-context";
import TasksContext from "../../../context/tasks-context";

const EditTaskForm = (props) => {
    const subTasksContext = useContext(SubTasksContext)
    const tasksContext = useContext(TasksContext)
    const [state, dispatchFormAction] = useReducer(formReducer, {
        input: {
            value: props.task.taskTitle,
            isInvalid: false,
        },
        textarea: {
            value: props.task.description,
            isInvalid: false,
        },
        select: {
            value: props.task.status,
            isInvalid: false,
        },
        subTasks: [],
    });

    const submitNewTaskHandler = (event) => {
        event.preventDefault();
        if (state.input.value.trim().length <= 0) {
            dispatchFormAction({
                type: "INPUT_INVALID",
                payload: {
                    input: {
                        value: state.input.value,
                        isInvalid: true,
                    },
                },
            });
            return;
        }
        if (state.textarea.value.trim().length > 100 || state.textarea.value.trim().length === 0) {
            dispatchFormAction({
                type: "TEXTAREA_INVALID",
                payload: {
                    textarea: {
                        value: state.textarea.value,
                        isInvalid: true,
                    },
                },
            });
            return;
        }
        if(state.select.value !== "todo" && state.select.value !== "doing" && state.select.value !== "done") {
            dispatchFormAction({
                type: "SELECT_INVALID",
                payload: {
                    select: {
                        value: state.select.value,
                        isInvalid: true,
                    },
                },
            });
            return;
        }
        const cleanSubTasks = subTasksContext.subTasks.filter(subTask => subTask.text.trim().length > 0);
        const newTask = {
            taskTitle: state.input.value,
            description: state.textarea.value,
            subtasks: cleanSubTasks,
            status: state.select.value,
            id: props.task.id,
        }
        tasksContext.editTask(props.task.id, tasksContext.currentBoard.boardId, newTask)
        props.onClose()
    }

    return (
        <form onSubmit={submitNewTaskHandler} className="mt-[24px]">
            <div>
                <div>
                    <Input
                        label="Title"
                        type="text"
                        placeholder="e.g. Take coffee break"
                        value={state.input.value}
                        onChange={(e) =>
                            dispatchFormAction({
                                type: "CHANGE_INPUT",
                                value: e.target.value,
                            })
                        }
                        isInvalid={state.input.isInvalid}
                    />
                </div>
                <div className="mt-[24px]">
                    <TextArea
                        label="Description"
                        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                        value={state.textarea.value}
                        onChange={(e) =>
                            dispatchFormAction({
                                type: "CHANGE_TEXTAREA",
                                value: e.target.value,
                            })
                        }
                        isInvalid={state.textarea.isInvalid}
                    />
                </div>
                <div>
                    <SubTasksContainer isEdit={true} task={props.task}/>
                </div>
                <div className="dropwdown-menu__idle w-full mt-[24px]">
                    <label>Status</label>
                    <select
                        selected={state.select.value}
                        value={state.select.value}
                        onChange={(e) =>
                            dispatchFormAction({
                                type: "CHANGE_SELECT",
                                value: e.target.value,
                            })
                        }
                        className={`${state.select.isInvalid && "invalid"}`}
                    >
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <Button
                    type={"submit"}
                    classes={classes["boardModal__primaryBtn"]}
                >
                    Edit Task
                </Button>
            </div>
        </form>
    );
};

export default EditTaskForm;

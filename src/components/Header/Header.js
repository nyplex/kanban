import classes from "./Header.module.css";
import logo from "./logo.svg";
import Button from "../UI/Interactive/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useContext, useState } from "react";
import NewTask from "../Tasks/NewTask/NewTask";
import Options from "./Options";
import TasksContext from "../../context/tasks-context";

const Header = (props) => {
    const [newTaskIsShown, setNewTaskIsShown] = useState(false);
    const [optionsIsShown, setOptionsIsShown] = useState(false);
    const tasksContext = useContext(TasksContext)

    return (
        <Fragment>
            <div className="relative">
                <nav className={classes.navbar}>
                    <div className={classes.logoContainer}>
                        <img src={logo} alt="Kanban Logo" />
                        <h1>Kanban</h1>
                    </div>
                    <div className={classes.navbarHeader}>
                        <div className={classes.heading}>
                            <h1>{tasksContext.currentBoard.boardTitle}</h1>
                        </div>
                        <div className={classes.btns}>
                            <Button
                                onClick={() => setNewTaskIsShown(true)}
                                classes={`btn-primary__l ${classes["btn"]}`}
                                type={"button"}
                            >
                                +Add New Task
                            </Button>
                            <button
                                onClick={() =>
                                    setOptionsIsShown((prevState) => !prevState)
                                }
                                className="text-mediumGrey dark:text-white z-50"
                            >
                                <FontAwesomeIcon
                                    size="2x"
                                    icon={faEllipsisVertical}
                                />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            {newTaskIsShown && (
                <NewTask onClose={() => setNewTaskIsShown(false)} />
            )}
            {optionsIsShown && (
                <Options onClose={() => setOptionsIsShown(false)} />
            )}
        </Fragment>
    );
};

export default Header;

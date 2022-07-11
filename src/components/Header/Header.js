import classes from "./Header.module.css";
import logo from "./logo.svg";
import Button from "../UI/Interactive/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";
import NewTask from "../Tasks/NewTask/NewTask";

const Header = (props) => {
    const [newTaskIsShown, setNewTaskIsShown] = useState(false);

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
                            <h1>Board Title</h1>
                        </div>
                        <div className={classes.btns}>
                            <Button
                                onClick={() => setNewTaskIsShown(true)}
                                classes={`btn-primary__l ${classes["btn"]}`}
                                type={"button"}
                            >
                                +Add New Task
                            </Button>
                            <button>
                                <FontAwesomeIcon
                                    color="#ffffff"
                                    size="2x"
                                    icon={faEllipsisVertical}
                                />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            {newTaskIsShown && <NewTask onClose={() => setNewTaskIsShown(false)}/>}
        </Fragment>
    );
};

export default Header;

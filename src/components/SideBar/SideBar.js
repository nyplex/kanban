import classes from "./SideBar.module.css";
import boardIcon from "../UI/boardIcon.svg";
import { Fragment, useState } from "react";
import NewBoard from "./NewBoard/NewBoard";

const SideBar = (props) => {
    const [newBoardIsShown, setNewBoardIsShown] = useState(false);
    return (
        <Fragment>
            <div>
                <div className={classes.sideBar}>
                    <h3>ALL BOARDS (3)</h3>

                    <div className={classes.boardItemsContainer}>
                        <div className={`${classes.item} ${classes.active}`}>
                            <img src={boardIcon} alt="Board icon" />
                            <span>Board Title</span>
                        </div>

                        <div className={`${classes.item}`}>
                            <img src={boardIcon} alt="Board icon" />
                            <span>Board Title</span>
                        </div>
                        <div className={classes.item} onClick={() => setNewBoardIsShown(true)}>
                            <img src={boardIcon} alt="Board icon" />
                            <span className="text-mainPurple">
                                + Create New Board
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {newBoardIsShown && <NewBoard onClose={() => setNewBoardIsShown(false)} />}
        </Fragment>
    );
};

export default SideBar;

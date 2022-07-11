import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Tasks from "./components/Tasks/Tasks";

function App() {
    return (
        <Fragment>
            <Header />
            <div className="flex flex-row">
                <SideBar />
                <Tasks />
            </div>
        </Fragment>
    );
}

export default App;

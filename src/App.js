import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Tasks from "./components/Tasks/Tasks";
import TasksProvider from "./context/TasksProvider";

function App() {


    return (
        <TasksProvider>
            <Header />
            <div className="flex flex-row">
                <SideBar />
                <Tasks />
            </div>
        </TasksProvider>
    );
}

export default App;

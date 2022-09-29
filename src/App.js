import TodoList from './TodoList';
import {v1} from 'uuid'
import {useState} from "react";

function App() {

    let initTasks = [
        {id: v1(), title: "React", isDone: false,},
        {id: v1(), title: "Redux", isDone: false,},
        {id: v1(), title: "MobX", isDone: true,},
        {id: v1(), title: "SCSS", isDone: true,},
    ]
    let [tasks, setTasks] = useState(initTasks);
    let [filter, setFilter] = useState("all");

    const removeTask = (id) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }
    const addTask = () => {
        let newTask = {id: v1(), title: "React", isDone: true};
        setTasks([...tasks, newTask])
    }
    const changeFilter = (value) => {
        setFilter(value)
    }

    let tasksForTodoList = tasks;
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }

    if (filter === "active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <TodoList
                title={"Title 1"}
                tasks={tasksForTodoList}
                removeTask={removeTask}
                addTask={addTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;

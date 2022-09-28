import TodoList from './TodoList';
import {v1} from 'uuid'
import {useState} from "react";

function App() {

    let initTasks = [
        {id: v1(), title: "React", isDone: true, },
        {id: v1(), title: "Redux", isDone: true, },
        {id: v1(), title: "MobX", isDone: false, },
        {id: v1(), title: "SCSS", isDone: true, },
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
    const filteredTasks = () => {
    if(filter==="all"){
        setTasks([...tasks]);
    }
    }
    return (
        <div className="App">
            <TodoList
                title={"Title 1"}
                tasks={tasks}
                removeTask={removeTask}
                addTask={addTask}
                filteredTasks={filteredTasks}
            />
        </div>
    );
}

export default App;

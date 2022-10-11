import React, {useState} from "react";
import "./TodoList.css";

function TodoList(props) {
    const [newTaskTitle, setNewTaskTitle] = useState("");


    return (
        <div>
            <h4>{props.title}</h4>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={(e) => {
                        setNewTaskTitle(e.currentTarget.value);
                    }
                    }
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            props.addTask(newTaskTitle);
                            setNewTaskTitle("");
                        }
                    }}
                />
                <button onClick={() => {
                    props.addTask(newTaskTitle);
                    setNewTaskTitle("");
                }}> +
                </button>
            </div>

            <div className={'todo_elements'}>
                <div className={'list'}>
                    {props.tasks.map((t) => {
                        return <div>
                            <input type={"checkbox"} id={t.id} checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {
                                props.removeTask(t.id)
                            }}>X
                            </button>
                        </div>
                    })}
                </div>
                <div>
                    <button onClick={() => {
                        props.changeFilter("all")
                    }}>all
                    </button>
                    <button onClick={() => {
                        props.changeFilter("active")
                    }}>active
                    </button>
                    <button onClick={() => {
                        props.changeFilter("completed")
                    }}>completed
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;

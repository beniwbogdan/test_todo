import React, {useState} from "react";
import "./TodoList.css";

function TodoList(props) {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const onChangeHandler = (e) => {
        setNewTaskTitle(e.currentTarget.value);
    }
    const onKeyDownHandler = (e) => {
        if (e.key === "Enter") {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
    }
    const onClickAddButtonHandler = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    }
    const onClickRemoveButtonHandler = (t) => {
        props.removeTask(t.id)
    }
    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }

    return (
        <div>
            <h4>{props.title}</h4>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
                <button onClick={onClickAddButtonHandler}>+</button>
            </div>

            <div className={'todo_elements'}>
                <div className={'list'}>
                    {props.tasks.map((t) => {
                        return <div>
                            <input type={"checkbox"} id={t.id} checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => onClickRemoveButtonHandler(t)}>X
                            </button>
                        </div>
                    })}
                </div>
                <div>
                    <button onClick={onAllClickHandler}>all</button>
                    <button onClick={onActiveClickHandler}>active</button>
                    <button onClick={onCompletedClickHandler}>completed</button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;

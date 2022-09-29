import React from "react";
import "./TodoList.css";

function TodoList(props) {

    return (
        <div>
            <h4>{props.title}</h4>
            <div>
                <input/>
                <button onClick={()=>{props.addTask()}}> +</button>
            </div>

            <div className={'todo_elements'}>
                <div className={'list'}>
                    {props.tasks.map((t) => {
                        return <div>
                            <input type={"checkbox"} id={t.id} checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={()=>{props.removeTask(t.id)}}>X</button>
                        </div>
                    })}
                </div>
                <div>
                    <button onClick={()=>{props.changeFilter("all")}}>all</button>
                    <button onClick={()=>{props.changeFilter("active")}}>active</button>
                    <button onClick={()=>{props.changeFilter("completed")}}>completed</button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;

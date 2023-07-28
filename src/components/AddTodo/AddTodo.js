import React, { useState } from "react";
import { PushTodo } from "../../redux/TodoSlice";
import { useSelector, useDispatch } from "react-redux";
import "./AddTodo.css";

export default function AddTodo() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");
    return(
        <form>
            <input
                type="text"
                placeholder="Enter todo item"
                className="w-6/12 m-4 border border-black border-4"
                onChange={(e) => {
                    e.preventDefault();
                    setTodo(prevTodo => e.target.value);
                }}
                value={todo || ""}
            />
            <button
                className="border border-black border-4 bg-blue-500 w-1/6 text-white" 
                onClick={(e) => {
                e.preventDefault();
                dispatch(PushTodo(todo));
                setTodo("");
            }}>Add</button>
        </form>
    )
}
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo } from "../../redux/TodoSlice";

export default function TodoList () {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoReducer.todos);
    const todoItems = todos.map((todo, i) => {
        return <li className={(i % 2 == 0 ? "bg-gray-400 " : "bg-white ") + "text-xl w-3/4 mx-auto hover:line-through cursor-pointer"} key={i} onClick={() => dispatch(DeleteTodo(i))}>{todo}</li>
    })
    return (
        <ul>
            {todoItems}
        </ul>
    )
}
import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import TodoList from "./TodoList";

var destiantion = document.querySelector("#container");


ReactDom.render(
    <div>
        <TodoList/>
        </div>,
        destiantion
)
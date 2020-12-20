import React, { useEffect } from "react";
import "./Todo.css";



export default function Todo (props){

    function RotateDropdownArrow(){
        const dropDown = document.querySelector(".dropDownButton");
        dropDown.style.transform = "rotate(270deg)";
    };
    return(
        <div className="TODO">
            <div className="main-todo">
                <p>{props.name}</p>
                <div className="todo-buttons">
                    <p className="completed">{props.children ? null : <input type="checkbox"></input>}</p>
                    <button>+</button>
                    <button className="dropDownButton" onClick={RotateDropdownArrow}>&gt;</button>
                </div>
            </div>
            <div className="child-todos">{props.children}</div>
        </div>
    )
}
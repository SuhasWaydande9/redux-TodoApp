import React from "react";

export default function Todo (props){
    return(
        <div className="TODO">
            <div className="main">
                <p>{props.name}</p>
                <p className="completed">{props.children ? null : <input type="checkbox"></input>}</p>
                <p>+</p>
            </div>
            <div className="child-todos">{props.children}</div>
        </div>
    )
}
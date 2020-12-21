import React from "react";
import "./Todo.css";
import { useDispatch } from "react-redux"

import { Delete_Todo,Delete_ChildTodo, Save,checkFeild } from "../../redux/reducers/TodosReducer"



export default function Todo (props){
    const dispatch = useDispatch();



    return(
        <div className="TODO">
            <div className="main-todo">
                <p>{props.name}</p>
                <div className="todo-buttons">
                    <p className="check-Box">{props.children ? null : <input checked={props.checked} onChange={(e)=>
                        {
                            dispatch(checkFeild({parentID:props.parent, childID:props.id, checked:e.target.checked}));
                            dispatch(Save())
                        }} type="checkbox"></input>
                        
                        }</p>
                    <button className="AddBtn" id={props.id} onClick={props.Add_Child}>+</button>
                    <button className="dropDownButton" onClick={()=> {
                        if(props.parent){
                            dispatch(Delete_ChildTodo({parentID:props.parent, childID:props.id}))
                            dispatch(Save());
                        }else{
                            dispatch(Delete_Todo({id:props.id}));
                            dispatch(Save());
                        }
                        }}>X</button>
                </div>
            </div>
            <div className="child-todos">{props.children}</div>
        </div>
    )
}
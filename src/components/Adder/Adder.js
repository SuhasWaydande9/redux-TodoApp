import React from "react"
import "./Adder.css"
import { useState } from "react";
import { useDispatch } from "react-redux"

//Redux-Actions
import {Add_Todo} from "../../redux/reducers/TodosReducer"


function Adder(){
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    function handleChange(input){
        setText(input.target.value);
    }
    return(
        <div className="Adder">
            <input onChange={handleChange} className="Add-Text" type={text} required={true}></input>
            <button onClick={()=>{
                if(text != ""){
                    dispatch(Add_Todo({name:text}));
                    document.querySelector(".Add-Text").value = "";
                    setText("");
                }
                }}>+</button>
        </div>
    )
}

export default Adder;
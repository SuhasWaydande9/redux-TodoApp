import React from "react";
import "./Header.css";

import { useDispatch } from "react-redux";

import { Save } from "../../redux/reducers/TodosReducer"

function Header(){
    const dispatch = useDispatch();
    return(
        <div className="main-Nav">
            <p>Todo's App</p>
            <button onClick={()=>dispatch(Save())}>Save</button>
        </div>
    )
}

export default Header;
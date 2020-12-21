import { createSlice } from "@reduxjs/toolkit"
import uuid from "react-uuid"

const TodosReducer = createSlice(
    {
        name:"TodosReducer",
        initialState:{
            Todos:[]
        },
        reducers:{
            Add_Todo:(state, action)=>{
                state.Todos.push(
                    {
                        id:uuid(),
                        name:action.payload.name,
                        child_todos:[],
                        date:new Date().toUTCString()
                    }
                );
                return state;
            }
        }
    }
)

export default TodosReducer;
export const { Add_Todo } = TodosReducer.actions;
import { createSlice } from "@reduxjs/toolkit"

const TodosReducer = createSlice(
    {
        name:"TodosReducer",
        initialState:{
            Todos:[]
        },
        reducers:{
            Add_Todo:(state, action)=>{
                state.Todos.push(action.payload);
                return state;
            }
        }
    }
)

export default TodosReducer;
export const { Add_Todo } = TodosReducer.actions;
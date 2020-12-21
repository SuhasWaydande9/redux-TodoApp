import { createSlice } from "@reduxjs/toolkit"
import uuid from "react-uuid"

const TodosReducer = createSlice(
    {
        name:"TodosReducer",
        initialState:JSON.parse(localStorage.getItem("Todo_state")) || {
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
            },
            Add_Child_Todo:(state, action) =>{
                state.Todos.map((el,index) =>{
                    if(el.id === action.payload.id){
                        state.Todos[index].child_todos.push({
                            id:uuid(),
                            checked:false,
                            name:action.payload.name,
                            date:new Date().toUTCString()
                        })
                    }
                }
                )
                return state;
            },
            Delete_Todo:(state, action)=>{

                state.Todos.filter((elm, i)=>{
                    if(elm.id === action.payload.id){
                        state.Todos.splice(i,1);
                    }
                })
                return state;
            },
            Delete_ChildTodo:(state, action)=>{
                state.Todos.filter((elm, i) => {
                        if(elm.id === action.payload.parentID){
                            elm.child_todos.map((child, index) =>{
                                if(child.id === action.payload.childID){
                                    state.Todos[i].child_todos.splice(index, 1);
                                }
                            })
                        };
                    });
                return state;
            },
            checkFeild:(state, action)=>{
                state.Todos.filter((elm) => {
                    if(elm.id === action.payload.parentID){
                        elm.child_todos.map((child) =>{
                            if(child.id === action.payload.childID){
                                child.checked = action.payload.checked;
                            }
                        })
                    };
                });
                return state;
            },

            Save:(state, action)=>{
                localStorage.setItem("Todo_state", JSON.stringify(state));
                return state;
            }
        }
    }
)

export default TodosReducer;
export const { Add_Todo, Add_Child_Todo, Delete_Todo, Delete_ChildTodo, Save, checkFeild } = TodosReducer.actions;
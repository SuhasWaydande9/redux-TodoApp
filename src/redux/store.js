import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "./reducers/TodosReducer"

const store = configureStore({
    reducer:TodosReducer.reducer,
    devTools:true,
})

export default store;

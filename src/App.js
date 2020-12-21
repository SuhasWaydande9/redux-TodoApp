import { useDispatch, useSelector } from 'react-redux';
import './App.css';

// Componenets
import Todo from "./components/Todo/Todo"
import Adder from "./components/Adder/Adder"
import Header from "./components/Header/Header"


//ReduxActions
import {Add_Todo} from "./redux/reducers/TodosReducer"

function App() {
  const TODOs = useSelector(state => state.Todos)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
      <Adder />
      <div className="Todo-Container">
        {TODOs.map(todo =>{
          return <Todo name={todo.name}></Todo>
        })}
      </div>
      <h1>Hello World</h1>
      <button onClick={()=>{dispatch(Add_Todo({name:"Hello World", id:1}))}}>Add Todo</button>
    </div>
    
  );
}

export default App;

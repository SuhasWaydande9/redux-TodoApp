import { useDispatch, useSelector } from 'react-redux';
import './App.css';

// Componenets
import Todo from "./components/Todo/Todo"
import Adder from "./components/Adder/Adder"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


//ReduxActions
import {Add_Child_Todo, Save} from "./redux/reducers/TodosReducer"

function App() {
  const TODOs = useSelector(state => state.Todos)
  const dispatch = useDispatch();

  function handle_ChildAdd(e){
    let input = prompt("Enter todo Name: ");
    dispatch(Add_Child_Todo({
      id:e.target.id,
      name: input
    }));
    dispatch(Save());
  }

  return (
    <div className="App">
      <Header />
      <Adder />
      <div className="Todo-Container">
        {TODOs.map(todo =>{
          return <Todo key={todo.id} name={todo.name} id={todo.id} Add_Child={handle_ChildAdd}>
            {todo.child_todos.length > 0 ? todo.child_todos.map(child_todo =>{
              return <Todo key={child_todo.id} id={child_todo.id} checked={child_todo.checked} parent={todo.id} name={child_todo.name}></Todo>
            }) : null }
          </Todo>
        })}
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;

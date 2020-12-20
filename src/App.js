import { useDispatch } from 'react-redux';
import './App.css';

// Componenets
import Todo from "./components/Todo/Todo"
import Header from "./components/Header/Header"

//ReduxActions
import {Add_Todo} from "./redux/reducers/TodosReducer"

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
      <div className="Todo-Container">
        <Todo name="Hello World" >
          <Todo name="Hello"></Todo>
          <Todo name="Hello"></Todo>
        </Todo>
        <Todo name="Hello"></Todo>
      </div>
      <h1>Hello World</h1>
      <button onClick={()=>{dispatch(Add_Todo({name:"Hello World", id:1}))}}>Add Todo</button>
    </div>
    
  );
}

export default App;

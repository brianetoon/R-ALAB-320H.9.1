import { useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "../data";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <Header />
      <AddTodo dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;

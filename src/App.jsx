import { useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "../data";

// Components
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="app | m-4">
      <Header>Todo List</Header>
      <AddTodo dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;

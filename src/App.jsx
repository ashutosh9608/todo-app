import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import EmptyMessage from "./components/EmptyMessage";
import TodoItems from "./components/TodoItems";
import TodoItemsContextProvider from "./Store/todo-items-store";

function App() {

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <EmptyMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
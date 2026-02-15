import "./App.css";
import AddTodo from "./temp/AddTodo";
import AppName from "./temp/AppName";
import EmptyMessage from "./temp/EmptyMessage";
import TodoItems from "./temp/TodoItems";
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

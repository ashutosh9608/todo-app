import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";

const EmptyMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (

    todoItems.length === 0 && <p >Enjoy Your Day</p>
  
  )
};

export default EmptyMessage;
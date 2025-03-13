import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () =>{},
  deleteItem: () =>{},
});

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];

  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter((item) => item.name !== action.payload.itemName);
  }
  return newTodoItems;
  //here newTodoItems is returned to toItemsReducer , then the todoItems is set as is  newTodoItems
}

const TodoItemsContextProvider =({children})=>{
//const [todoItems, setTodoItems] = useState([]);
  const [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);
//Adding Items Action
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    }
    dispatchTodoItems(newItemAction);
  };
//Deleting Item Action
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      }
    }
    dispatchTodoItems(deleteItemAction);
  };
  return(
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      {children}
    </TodoItemsContext.Provider>
  )
}

export default TodoItemsContextProvider;
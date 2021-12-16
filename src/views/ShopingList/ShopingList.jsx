import React, { useReducer } from "react";
import AddItem from "../../components/AddItem/AddItem";
import ItemList from "../../components/ItemList/ItemList";



const initialItems = [];

function itemsReducer(items, action) {
  switch (action.type) {
    case "add": {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
        }
      ];
    }
    case "update": {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case "delete": {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function ListOfItems() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({
      type: "add",
      id: Math.floor(Math.random() * 1000),
      text
    });
  };

  const handleItemUpdate = (task) => {
      dispatch({
          type:  'update',
          task
      })
  }

  const handleItemDelete = (taskId) => {
    dispatch({
      type: "delete",
      id: taskId
    });
  };

  return (
    <>
      <h1> Your List!</h1>
      <AddItem handleAddItem={handleAddItem} />
      <ItemList items={items} handleItemDelete={handleItemDelete} handleItemUpdate={handleItemUpdate} />
    </>
  );
}

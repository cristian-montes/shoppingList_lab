import React, { useState } from "react";
import styles from  "./Item.module.css";

export default function Item({ item, handleItemDelete, handleItemUpdate }) {
  const [editItem, setEditItem] = useState(false);
  let conditionalItem;

  if(editItem) {
    conditionalItem = (
      <>
        <input 
          value ={item.text}
          onChange={(event) =>{
            handleItemUpdate({
              ...item,
              text: event.target.value,
            })
          }}
        />
        <button
          type= "button"
          onClick={()=> setEditItem(false)}
        >
          Save
        </button>
      </>
    )
    } else {
       conditionalItem = (
      <>
        <p>{item.text}</p>
        <button
          type="button"
          onClick={() => setEditItem(true)}
        >
          Edit
        </button>
      </>
       )
    }





  return (
    <div className={styles.itemDiv}>
        {conditionalItem}
        <button
          className="button-list"
          type="text"
          onClick={() => handleItemDelete(item.id)}
        >
          <p> delete </p>
        </button>
    </div>
  );
}
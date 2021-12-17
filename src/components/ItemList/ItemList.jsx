import React from "react";
import Item from "./Item";
import "./ItemList.css";

export default function ItemList({ items, handleItemDelete }) {
  console.log("items", items);
  return (
    <div className="ul-div">
      <ul aria-label="list" style={{ listStyleType: "none" }}>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} handleItemDelete={handleItemDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
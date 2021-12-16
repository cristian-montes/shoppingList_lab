import React from "react";
// import "./Item.css";
export default function Item({ item, handleItemDelete }) {
  return (
    <>
      <button
        className="button-list"
        type="text"
        onClick={() => handleItemDelete(item.id)}
      >
        <p className="p-item">{item.text}</p>
      </button>
    </>
  );
}
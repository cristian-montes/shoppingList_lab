import React, { useState } from "react";
import "./AddItem.css";

export default function AddItem({ handleAddItem }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setText("");
    handleAddItem(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="main-input"
        placeholder="Add a new item..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button disabled={!text.length} className="submit" type="submit">
        New Item
      </button>
    </form>
  );
}
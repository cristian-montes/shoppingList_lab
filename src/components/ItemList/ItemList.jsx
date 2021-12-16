import Item from "./Item";
import "./ItemList.css";

export default function ItemList({ items, handleItemDelete }) {
  console.log("items", items);
  return (
    <div className="ul-div">
      <ul style={{ listStyleType: "none" }}>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} handleItemDelete={handleItemDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
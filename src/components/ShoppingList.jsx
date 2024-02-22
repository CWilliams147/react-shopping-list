import React from "react";

function ShoppingList({ items }) {
  return (
    <div>
      <h2>Shopping List</h2>
      {Object.keys(items).length > 0 && (
        <ul>
          {Object.entries(items).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;

import React, { useState } from "react";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [shoppingListItems, setShoppingListItems] = useState({});

  const generateList = (items) => {
    setShoppingListItems(items);
  };

  return (
    <div>
      <h1>Shopping List App</h1>
      <ShoppingForm generateList={generateList} />
      <ShoppingList items={shoppingListItems} />
    </div>
  );
}

export default App;

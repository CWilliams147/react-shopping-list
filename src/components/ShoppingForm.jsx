import React, { useState } from "react";

function ShoppingForm({ generateList }) {
  const [myList, setMyList] = useState({ firstGroceryItem: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyList((prevList) => ({
      ...prevList,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    generateList(myList);
  };

  return (
    <div>
      <h2>Shopping Form</h2>
      <input
        type="text"
        name="firstGroceryItem"
        value={myList.firstGroceryItem}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Make My List</button>
    </div>
  );
}

export default ShoppingForm;

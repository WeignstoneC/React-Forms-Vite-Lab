import React from "react";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name,
      category,
    };

    onItemFormSubmit(newItem);
    setName("");
    setCategory("Produce");
  }
  return (
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
        Name:
        <input type="text" name="name" />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

      <label>
        Category:
        <select name="category">
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
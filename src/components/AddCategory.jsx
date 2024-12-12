import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Dragon Ball");

  const onInputChange = ({ target: { value } }) => {
    setInputValue(`${value}`);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const category = inputValue.trim();
    if (category.length <= 1) return;
    onNewCategory(category);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Rick y Morty", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Search App - Jess</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((c) => (
        <GifGrid key={c} category={c} />
      ))}
    </>
  );
};

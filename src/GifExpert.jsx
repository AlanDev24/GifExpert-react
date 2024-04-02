import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpert = () => {
  const [categories, setCategories] = useState([]);
  


  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //? Agregar category
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpert</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
    </>
  );
};

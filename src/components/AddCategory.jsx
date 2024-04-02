/* eslint-disable react/prop-types */
import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event)=>{
    event.preventDefault();
    if(inputValue.trim() === '')return 
    onNewCategory(inputValue.trim());
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
        placeholder="Buscar gifs"
      />
    </form>
  );
};
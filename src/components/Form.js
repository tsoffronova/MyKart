import React, { useState } from 'react'

const Form = ({ setInputText, items, setItems, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitItemHandler = (e) => {
    e.preventDefault();
    setItems([
      ...items, {text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    setInputText(""); //reset state
  };   
   return (
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="item-input" />
        <button onClick={submitItemHandler} className="item-button" type="submit" placeholder="Add an item">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    );
}


export default Form;

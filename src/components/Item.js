import React from 'react';

const Item = ({ text, item, items, setItems }) => {
    const deleteHandler = () => {
        setItems(items.filter((el) => el.id !== item.id));
    };
    const completeHandler  = () => {
        setItems(items.map((grocery) => {
            if(grocery.id === item.id){
                return {
                    ...grocery, completed: !grocery.completed
                };
            } 
             return grocery;
         })
        );
       };
       
    return (
      <div className="item">
       <li className={`single-item ${item.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
};

export default Item;
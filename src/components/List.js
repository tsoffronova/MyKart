import React from 'react';
import Item from "./Item";

const List = ({ items, setItems }) => {
    return ( 
    <div className="item-container">
        <ul className="item-list">
          {items.map((item) => (
              <Item setItems={setItems} items={items} key={item.id} item={item} text={item.text} />
          ))}  
             </ul>
    </div>
    );
};

export default List;
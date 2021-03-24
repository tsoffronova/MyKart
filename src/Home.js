import React,{ useState } from 'react'
import './App.css';
import Form from './components/Form';
import List from './components/List';
import groceries from "./groceries.png";


function Home() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
   function refreshPage() {
     window.location.reload(false);
   }
  return (
    <div className="mykart-app">
      <header>Add groceries</header>
      <Form
        inputText={inputText}
        items={items}
        setItems={setItems}
        setInputText={setInputText}
      />
      <List setItems={setItems} items={items} />
      <button className="refresh-btn" onClick={refreshPage}>Refresh List</button>
    </div>
  );
}

export default Home;

import React from 'react'
import Home from './Home'
import {Link } from "react-router-dom";
import logo from './logo.png';
import groceries from './groceries.png'
import "./App.css";

function App() {
    return (
      <div className="app-wrap">
        <img className="groceries-image" src={groceries} />
        <img className="logo" src={logo} />
        <Link to="/Home">
          <button className="newlist-btn">
            New list
          </button>
        </Link>
      </div>
    );
}

export default App;
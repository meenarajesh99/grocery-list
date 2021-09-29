
import React, { Component } from "react";
import Header from './components/Header.js';

import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';
import {useState} from 'react';
import { Dropdown, Option } from "./Dropdown";

function App() {
 
  
 

  const {items} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (item) => {
    const exist = cartItems.find(x => x.id === item.id);
    if(exist){
      setCartItems(cartItems.map((x) => 
      x.id === item.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    }else{
      setCartItems([...cartItems, {...item, qty: 1}]);
    }
  };
  const onRemove = (item) => {
    const exist= cartItems.find(x => x.id === item.id);
      if(exist.qty ===1){
        setCartItems(cartItems.filter((x)=> x.id !== item.id));
      }else{
        setCartItems(cartItems.map((x) => 
         x.id === item.id ? {...exist, qty: exist.qty - 1} : x
        )
        );

      }
    }
    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
      console.log(e.target.value);
      setOptionValue(e.target.value);
    };
  
  return (
    <div className="App">
     <Header></Header> 
     <div className="row">
     <Dropdown
        formLabel="Choose a category">
        buttonText="Send form"
        onClick={handleSelect}
        
        action="https://localhost:3000/posts:value" 
        <p>You selected {optionValue}</p>
        
         <Option selected value="Click to see options" />
        <Option value="Grapes" >Grapes</Option>
        <Option value="Apples" >Apples</Option>
        <Option value="Bread" >Bread</Option>
        <Option value="Milk" >Milk</Option>
        <Option value="Broccoli" >Broccoli</Option>
        <Option value="Brown Eggs" >Brown Eggs</Option>
        <Option value="Chips" >Chips</Option>
        <Option value="Cookies" >Cookies</Option>
        <Option value="Cheese" >Cheese</Option>
        <Option value="Yogurt" >Cheese</Option>
      </Dropdown>
    
     
     
      <div className="stuff">
      <h2>Items</h2>
       <Main onAdd={onAdd} items = {items}></Main>
        </div>

       
       <Cart onAdd={onAdd} onRemove={onRemove} cartItems = {cartItems}></Cart>
    </div>
  </div> 
    
  );
  }

export default App;




import React from 'react';
import Item from './Item.js';
//import { Dropdown, Option } from "../Dropdown";

export default function Main(props){
    const {items, onAdd} = props;
 
    return (
    <main className="block col-2">
       
      
     {/* <Dropdown
        formLabel="Choose a category">
        
        <Option selected value="Click to see options" />
        <Option value="fruits" >fruits</Option>
        <Option value="vegetables" >vegetables</Option>
       
      </Dropdown> */}
  
        <div className="row">
            {items.map((item)=>(
              <Item key={item.id} item={item} onAdd={onAdd}></Item> 
              ))}
        </div>
       
         <br></br><br></br>  
        
        {/* <div className="row">
            {items.map((item)=>(
              <Item key={item.id} item={item} onAdd={onAdd}></Item> 
              ))}
        </div> */}

        
        </main>
    );
}
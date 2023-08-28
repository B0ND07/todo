import React, { useState } from "react";
import TodoItems from "./toDoItems";

function App(){
   const[items,setItems]=useState([])
   const [inputText,setInputText]=useState("");
   return(
      <div className="todo-app">
         <h1>To-Do List</h1>
      <div className="input-container">
         <input onChange={(event)=>
         {const newValue=event.target.value;
         setInputText(newValue)}} 
         type="text" value={inputText}/>

         <button onClick={()=>{
         setItems((prevItems)=>{
         return[...prevItems,inputText]
         })
         setInputText("")}}>Add</button>
      </div>
      
      <div>
         <ul className="todo-list">
            {items.map((todoItems,index)=> (
            <TodoItems 
            key={index}
            id={index}
            text={todoItems}
            onChecked={(id)=>{
               setItems(prevItems=>{
                  return prevItems.filter(
                     (item,index)=>{
                        return index!==id;
                     }
                  );
               });
            }}/>))}
         </ul>
      </div>
   </div>
   )
}

export default App;

import React from "react";

function TodoItems(props){
    return (
        <div className="todo-list" onClick={()=>{props.onChecked(props.id);}}>
        <li><span>{props.text}</span></li>
        </div>
    );
}
 
export default TodoItems;
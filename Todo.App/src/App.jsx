import TodoName from "./components/TodoName";
import Row1 from "./components/Row1";
 import Data from "./components/data";
import Foot from "./components/Foot";
import styles from "./components/App.module.css"
import { Button } from "bootstrap";
import { useRef, useState} from "react";
import Welcomemessage from "./components/Welcomemessage";
//  import "./App.css";'

function App() {
  const initialstate=[ ]
//   const currVal=useRef("hello");
// const func=(event)=>{
// console.log(currVal.current.value);
// }
  
//   return(<>/
// //     console.log("it is arraay")
// //   }
const[todoItems,setTodoItems]=useState(initialstate);

// const todoItem=[
//   {name:"buy milk",
//   dueDate:"01/02/2009"},
//   {
//     name:"goto college",
//     dueDate:"31/05/2008"
//   },
//   {name:"goto home",
//     dueDate:"31/05/2004"
//   },

// ]
const handleItem=(newName,newDate)=>{
  const newTodoItem=[{name:newName,itemDueDate:newDate},...todoItems]
  setTodoItems(newTodoItem);}
  const handleOnDelete=(itemname)=>{
    const newTodoItem=todoItems.filter((itemn)=>
      itemname!=itemn.name
    )
    setTodoItems(newTodoItem)
    

  }



  


   return (
     <div
       className={styles.mainBox}
      
     >
       <TodoName />
       <Row1 handleItem={handleItem} />
       { todoItems.length===0 && <Welcomemessage />}

  

       <Data todoItems={todoItems} handleOnDelete={handleOnDelete} />
    
       {/* <Foot  />  */}
     </div>
  );
 } 
export default App;

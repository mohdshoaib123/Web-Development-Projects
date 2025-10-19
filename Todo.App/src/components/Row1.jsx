 import { useState } from "react";
import { GiSaveArrow } from "react-icons/gi";
import styles from "./Row1.module.css"
import { useRef } from "react";
function Row1({handleItem}) {
  const [newName,setName]=useState();
  const [newDate,setDate]=useState();
  // const todoNameElement=useRef()
  // const todoDateElement=useRef()
  const handleNewname=(event)=>{
    // console.log(event.target.value)
    setName(event.target.value);
  }
  const handleNewdate=(event)=>{
    // console.log(event.target.value)
    setDate(event.target.value)
  }
  const handleNewItem=()=>{
    handleItem(newName,newDate);
    setName("");
    setDate("");
  }
  
  
  
  return (
    <div className={styles.Row1}>
    <div className="row">
      <div className="col">
         <input  type="text" value={newName} placeholder="Enter Todo Here" onChange={handleNewname}  /> 
      </div>
      <div className="col">
         <input  type="date"  value={newDate}onChange={handleNewdate} /> 
      </div>
      <div className="col">
         <button type="button" className="btn btn-success" onClick={handleNewItem}>Add
          
        </button> 
      </div>
    </div>
    </div>
  );
}
export default Row1;

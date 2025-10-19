 import styles from "./Data.module.css"
 function Data({todoItems,handleOnDelete}) {

  return (
    <div className={styles.Data}>
         {todoItems.map((item,index)=>(
    <div  key={index} className="row">
    
    
      <div key={item.name} className="col">{item.name}</div>
      
      <div key={item.dueDate} className="col">{item.itemDueDate}</div>

      
      <div className="col">
        <button  className="btn btn-danger" type="submit" onClick={()=>{handleOnDelete(item.name)}}>
          Delete
        </button>
      </div>
    </div> ))}
    
    </div>
  );
}
export default Data;

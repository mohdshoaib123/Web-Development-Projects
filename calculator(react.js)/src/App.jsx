import styles from "./components/App.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Display from "./components/Display"
import Text from "./components/Text";
import "./App.css"
import { useState } from "react";
function App(){
  let [calVal,setcalValue]=useState("");
  let onButtonClick=(event)=>{
    if(event.target.innerText==="C")
    { setcalValue("")}
      else if(event.target.innerText==="=")
      {
        let result=eval(calVal)
        setcalValue(result)
      }
      else{
        let newVal=calVal+event.target.innerText
        setcalValue(newVal)

      }


  }
  return (<div className={styles.calculator}>
    
    <Text displayValue={calVal}></Text>
      <Display onButtonClick={onButtonClick}></Display>

  
  </div>)
}
export default App;
import Lottery from './Lottery'
import './App.css'
import Ticket from './Ticket'
import {sum} from"./Helper";



function App() {
  const wincondition=(ticket)=>{
    return sum(ticket)===15;
  }


  return (
     <>
     <Lottery n={3} wincondition={wincondition}></Lottery>
    
 
    </>
  )
}

export default App

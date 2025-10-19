import { useState } from "react";
 import "./Content.css";
import { genTicket,sum} from "./Helper";
import Ticket from "./Ticket";
function Lottery({n,wincondition}){
    const[ticket,setTicket]=useState(genTicket(n));
    let iswinning=wincondition(ticket);
    const handleOnClick=()=>{
      setTicket(genTicket(n));
        }
  return(<>
    <h1>Lottery Game!</h1>
     <Ticket ticket={ticket}></Ticket>
      
    
    <button className="btn" onClick={handleOnClick}>genrate ticket</button>
     <h1>{iswinning && "Congratulation You Won!"}</h1>
    </>
  )
}
export default Lottery;
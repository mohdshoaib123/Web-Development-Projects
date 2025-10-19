import TicketNum from "./TicketNum";

function Ticket({ticket}){
  return(
  <>
    <div className="tic-box">
      <p>Ticket!</p>
      {ticket.map((num,idx)=>(
        <TicketNum key={idx} num={num}></TicketNum>
      )
      )}
    </div>
    </>
  )
}
export default Ticket; 
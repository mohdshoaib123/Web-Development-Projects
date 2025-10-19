import "./TicketNum.css";
function TicketNum({num}){
  return(
    <span key={num} className="TicketNum">{num}</span>

  )
}
export default TicketNum;
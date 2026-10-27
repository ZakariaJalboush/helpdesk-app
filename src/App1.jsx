import "./App.css";
// import Header from "./components/Header.jsx";
// import Panel from "./components/Panel.jsx";
import { useState } from "react";

function App1() {
  const [ticket, setTicket] = useState(null);
  

    if (ticket === null || ticket === undefined) {
      return null;
    }

  return (
    <div>
      <h1>Ticket Details</h1>
      <p>ID: {ticket.id}</p>
      <p>Name: {ticket.name}</p>
      <p>Phone Number: {ticket.phonenumber}</p>
      <p>Department: {ticket.department}</p>
    </div>
  );
}


export default App1;

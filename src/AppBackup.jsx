import "./App.css";
import Header from "./components/Header.jsx";
import Panel from "./components/Panel.jsx";
import { useState } from "react";

function AppBackup() {
  // const appName = "Helpdesk Management System";
  // const totalTickets = 120;
  // const openTickets = 35;
  //const closedTickets = 85;
  // let koko = 0;

  // function handleTicketClick() {
  //   // koko = totalTickets + 1;
  //   // console.log("Ticket added. Total tickets:", koko);

  //   setCountKoko(countKoko + 1);
  //   console.log("Ticket added. Total tickets:", countKoko + 1);
  // }

  // let count = 1;
  // function increase()
  // {
  //   count += 1;
  //   console.log(count);
  // }

  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  // function handleClick() {
  //   console.log("Before:", count);

  //   setCount((koko) => koko + 1);
  //   setCount((koko) => koko + 1);
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);

  //   console.log("After:", count);
  // }

  // console.log("After: >>>>>>>> ", count);

  // const [tickets, setTickets] = useState([
  //   { id: 204, title: "Login Issue", status: "Open" },
  //   { id: 205, title: "Payment Issue", status: "Open" },
  //   { id: 206, title: "Payment Issue", status: "Open" },
  //   { id: 207, title: "Payment Issue", status: "Open" },
  // ]);

  const [ticket, setTicket] = useState(
    {
    id: 204,
    requester: { name: "Sara",phonenumber: '123-456-7890', department: "IT" , testOBject: { test: "test" , test2 :"2" }},
  }
);

  function wrongResolve() {
    ticket.status = "Closed"; // mutation: avoid
    setTicket(ticket); // same object reference
  }

  function resolve() {
    setTicket((prev) => ({
      ...prev,
      requester: { ...prev.requester, department: "Support" , testOBject: { ...prev.requester.testOBject, test: "updated" } },
    }));

    // const id = 206;
    // (console.log("Tickets after update: 1111", tickets),
    //   setTickets(
    //     (prev) =>
    //       prev.map((ticket) =>
    //         ticket.id === id ? { ...ticket, status: "Closed" } : ticket,
    //       ),

    //     console.log("Tickets after update: 2222", tickets),
    //   ));
  }
  console.log("Tickets after update: 3333", tickets);
  return <button onClick={resolve}>Test</button>;

  return (
    <div
      style={{
        backgroundColor: "Red",
        border: "1px solid #ccc",
        padding: "20px",
      }}
      onClick={() => console.log("Card clicked")}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
          console.log("Button clicked");
        }}
      >
        Resolve
      </div>

      <button
        onClick={(event) => {
          event.stopPropagation();
          console.log("Button clicked");
        }}
      >
        Resolve 1
      </button>

      <button
        onClick={(event) => {
          event.stopPropagation();
          console.log("Button clicked");
        }}
      >
        Resolve 2
      </button>
    </div>
  );

  return (
    <>
      <button onClick={handleResolve}>Resolve</button>
      <button onClick={() => alert("Assigned")}>Assign</button>
      <button onClick={() => handleTicket(204)}>Open #204</button>
    </>
  );

  return <button onClick={handleClick}>CountXXX: {count}</button>;

  const [countKoko, setCountKoko] = useState(0);

  return (
    <main>
      <h2>Open Tickets: {countKoko}</h2>
      <button onClick={handleTicketClick}>Add Ticket</button>
    </main>
  );

  return <button onClick={increase}>Count: {count}</button>;

  return (
    <div className="app">
      {/* <header className="header">
        <h1>{appName}</h1>
      </header> */}

      <Header title={totalTickets} subtitle="Your Support Dashboard" />
      <Panel title="Ticket Statistics" yanal="yanal">
        <h4>Total Tickets: {koko}</h4>
        <h4>Open Tickets: {openTickets}</h4>
        <h4>Closed Tickets: {closedTickets}</h4>
      </Panel>
      <button onClick={() => handleTicketClick}>Add Ticket</button>
      <main className="dashboard">
        <h2>Dashboard</h2>
        <p>Welcome to your Helpdesk Dashboard</p>

        <section className="stats">
          <div className="card">
            <h3>Total Tickets</h3>
            <p>{totalTickets}</p>
          </div>
          <div className="card">
            <h3>Open Tickets</h3>
            <p>{openTickets}</p>
          </div>
          <div className="card">
            <h3>Closed Tickets</h3>
            <p>{closedTickets}</p>
          </div>
        </section>

        <section className="recent-tickets">
          <h2>Recent Tickets</h2>
          <p>No tickets to display yet.</p>
        </section>
      </main>
    </div>
  );
}

export default AppBackup;

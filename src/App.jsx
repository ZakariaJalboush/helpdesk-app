import "./App.css";
import Header from "./components/Header.jsx";
import Panel from "./components/Panel.jsx";

function App() {
  const appName = "Helpdesk Management System";
  const totalTickets = 120;
  const openTickets = 35;
  const closedTickets = 85;

  return (
    <div className="app">
      {/* <header className="header">
        <h1>{appName}</h1>
      </header> */}

      <Header title={totalTickets} subtitle="Your Support Dashboard" />
      <Panel title="Ticket Statistics" yanal="yanal">
        <h4>Total Tickets: {totalTickets}</h4>
        <h4>Open Tickets: {openTickets}</h4>
        <h4>Closed Tickets: {closedTickets}</h4>
      </Panel>

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

export default App;
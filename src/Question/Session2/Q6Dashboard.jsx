import Q6AgentCard from "./Q6AgentCard.jsx";
import Q6Panel from "./Q6Panel.jsx";
import Q6StatCard from "./Q6StatCard.jsx";
import Q6TicketCard from "./Q6TicketCard.jsx";

function Q6Dashboard({ systemName, tickets, agents }) {
  const isActive = (ticket) =>
    ticket.status === "Open" || ticket.status === "Pending";
  const countStatus = (status) =>
    tickets.filter((ticket) => ticket.status === status).length;
  const unassignedActive = tickets.filter(
    (ticket) => !ticket.assignedTo && isActive(ticket),
  ).length;

  return (
    <main className="q6-page">
      <header className="q6-page-header">
        <div className="q6-brand-mark" aria-hidden="true">
          HD
        </div>
        <div>
          <p className="q6-eyebrow">SUPPORT OPERATIONS</p>
          <h1>{systemName}</h1>
          <p className="q6-page-description">
            A live overview of ticket status and team capacity.
          </p>
        </div>
      </header>

      <Q6Panel title="Ticket statistics">
        <div className="q6-stats-grid">
          <Q6StatCard title="Total tickets" value={tickets.length} />
          <Q6StatCard title="Open" value={countStatus("Open")} />
          <Q6StatCard title="Pending" value={countStatus("Pending")} />
          <Q6StatCard title="Closed" value={countStatus("Closed")} />
          <Q6StatCard title="Unassigned active" value={unassignedActive} />
        </div>
      </Q6Panel>

      <Q6Panel title="Support tickets">
        <div className="q6-ticket-grid">
          {tickets.map((ticket) => (
            <Q6TicketCard key={ticket.id} {...ticket} />
          ))}
        </div>
      </Q6Panel>

      <Q6Panel title="Support team">
        <div className="q6-agent-grid">
          {agents.map((agent) => {
            const activeTickets = tickets.filter(
              (ticket) =>
                ticket.assignedTo === agent.name && isActive(ticket),
            ).length;

            return (
              <Q6AgentCard
                key={agent.name}
                {...agent}
                activeTickets={activeTickets}
              />
            );
          })}
        </div>
      </Q6Panel>

      <Q6Panel title="Team notes">
        <p className="q6-note">
          Review unassigned active tickets and follow up on pending requests.
        </p>
      </Q6Panel>
    </main>
  );
}

export default Q6Dashboard;

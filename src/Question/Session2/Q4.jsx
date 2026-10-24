import "./Q4.css";
import AgentCard from "./AgentCard.jsx";
import Frame from "./Frame.jsx";
import TicketCard from "./TicketCard.jsx";

function Q4() {
  const agents = [
    {
      name: "Ahmad",
      role: "Team Lead",
      activeTickets: 7,
      capacity: 12,
    },
    {
      name: "Sara",
      role: "Support Agent",
      capacity: 8,
    },
  ];

  return (
    <main className="q4-page">
      <header className="q4-page-header">
        <p className="q4-eyebrow">SUPPORT OPERATIONS</p>
        <h1>Flexible Support Cards</h1>
        <p className="q4-page-description">
          Team assignments, ticket details, and support notes in one place.
        </p>
      </header>

      <section className="q4-grid" aria-label="Support team and updates">
        {agents.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}

        <TicketCard id="1004" subject="Login Issue" status="Open" />

        <Frame title="Team Note">
          <p className="q4-note">
            Review pending requests before 3 PM.
          </p>
        </Frame>
      </section>
    </main>
  );
}

export default Q4;

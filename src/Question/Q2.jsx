import "./Q2.css";
import AgentCard from "../components/AgentCard.jsx";
import Panel from "../components/Panel.jsx";
import StatCard from "../components/StatCard.jsx";

function Q2() {
  const agents = [
    { name: "Ahmad", role: "Team Lead", activeTickets: 7, capacity: 12 },
    { name: "Sara", capacity: 8 },
    { name: "Omar", role: "Support Agent", activeTickets: 9, capacity: 10 },
  ];

  const teamTotals = agents.reduce(
    (totals, agent) => {
      const activeTickets = agent.activeTickets ?? 0;
      const capacity = agent.capacity ?? 0;

      totals.activeTickets += activeTickets;
      totals.capacity += capacity;
      totals.remaining += capacity - activeTickets;
      return totals;
    },
    { activeTickets: 0, capacity: 0, remaining: 0 },
  );

  return (
    <main className="app-shell">
      <header className="page-header">
        <div className="brand-mark" aria-hidden="true">
          HD
        </div>
        <div>
          <p className="eyebrow">SUPPORT OPERATIONS</p>
          <h1>Workload Distribution</h1>
          <p className="page-description">
            A clear view of your team&apos;s workload and available capacity.
          </p>
        </div>
      </header>

      <Panel title="Team overview">
        <div className="stats-grid">
          <StatCard title="Active tickets" value={teamTotals.activeTickets} />
          <StatCard title="Total capacity" value={teamTotals.capacity} />
          <StatCard title="Available capacity" value={teamTotals.remaining} />
        </div>
      </Panel>

      <Panel title="Support team">
        <p className="panel-description">
          Current assignments and remaining ticket capacity for each team
          member.
        </p>
        <div className="agents-grid">
          {agents.map((agent) => (
            <AgentCard key={agent.name} {...agent} />
          ))}
        </div>
      </Panel>
    </main>
  );
}

export default Q2;

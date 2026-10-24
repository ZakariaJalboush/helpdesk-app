import "./Q2.css";
import AgentCard from "../../components/AgentCard.jsx";
import Panel from "../../components/Panel.jsx";
import StatCard from "../../components/StatCard.jsx";

function Q2() {
  const agents = [
    { name: "koko", role: "Team Lead", activeTickets: 7, capacity: 12 },
    { name: "Ahmad", role: "Team Lead", activeTickets: 7, capacity: 12 },
    { name: "Sara", capacity: 8 },
    { name: "Omar", role: "Support Agent", activeTickets: 9, capacity: 10 },
    { name: "abd", role: "dev", activeTickets: 9, capacity: 10 },
  ];

  const teamTotals = 10;

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
          <StatCard title="Active tickets" value={teamTotals} />
          <StatCard title="Total capacity" value={teamTotals} />
          <StatCard title="Available capacity" />
          {/* <AgentCard name="koko111122" role="Team Leadddddd" activeTickets={7} capacity={12} /> */}
        </div>
      </Panel>

      <Panel title="Support team">
        <p className="panel-description">
          Current assignments and remaining ticket capacity for each team
          member.
        </p>
        <div className="agents-grid">
          {agents.map((x) => (
            <div>
              <AgentCard
                name={x.name}
                role={x.role}
                activeTickets={x.activeTickets}
                capacity={x.capacity}
              />
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="test">
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
      <Panel title="test">
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

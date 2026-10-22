function AgentCard({
  name,
  role = "Support Agent",
  activeTickets = 0,
  capacity,
}) {
  const remaining = capacity - activeTickets;
  const workloadPercentage =
    capacity > 0 ? Math.min((activeTickets / capacity) * 100, 100) : 0;

  return (
    <article className="agent-card">
      <div className="agent-heading">
        <div className="agent-avatar" aria-hidden="true">
          {name.charAt(0)}
        </div>
        <div>
          <h3>{name}</h3>
          <p className="agent-role">{role}</p>
        </div>
      </div>

      <div className="workload-heading">
        <span>Ticket workload</span>
        <span className="workload-count">
          {activeTickets} <span className="muted">/ {capacity}</span>
        </span>
      </div>
      <div
        className="workload-track"
        role="progressbar"
        aria-label={`${name} ticket workload`}
        aria-valuemin="0"
        aria-valuemax={capacity}
        aria-valuenow={activeTickets}
      >
        <span style={{ width: `${workloadPercentage}%` }} />
      </div>

      <div className="agent-remaining">
        <span>Available capacity</span>
        <strong>{remaining}</strong>
      </div>
    </article>
  );
}

export default AgentCard;

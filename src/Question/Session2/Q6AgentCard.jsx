function Q6AgentCard({ name, role, capacity, activeTickets }) {
  const remaining = capacity - activeTickets;

  return (
    <article className="q6-agent-card">
      <div className="q6-agent-heading">
        <div className="q6-agent-avatar" aria-hidden="true">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="q6-agent-name">{name}</h3>
          <p className="q6-agent-role">{role}</p>
        </div>
      </div>
      <dl className="q6-agent-stats">
        <div>
          <dt>Active tickets</dt>
          <dd>{activeTickets}</dd>
        </div>
        <div>
          <dt>Capacity</dt>
          <dd>{capacity}</dd>
        </div>
        <div>
          <dt>Remaining</dt>
          <dd>{remaining}</dd>
        </div>
      </dl>
    </article>
  );
}

export default Q6AgentCard;

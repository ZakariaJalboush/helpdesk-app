import Badge from "./Badge.jsx";
import Frame from "./Frame.jsx";
import InfoRow from "./InfoRow.jsx";

function AgentCard({ name, role, activeTickets = 0, capacity }) {
  const remaining = capacity - activeTickets;

  return (
    <Frame title={name} subtitle={role}>
      <div className="q4-card-badge">
        <Badge label="Agent" tone="green" />
      </div>
      <div className="q4-info-list">
        <InfoRow label="Active tickets" value={activeTickets} />
        <InfoRow label="Capacity" value={capacity} />
        <InfoRow label="Remaining" value={remaining} />
      </div>
    </Frame>
  );
}

export default AgentCard;

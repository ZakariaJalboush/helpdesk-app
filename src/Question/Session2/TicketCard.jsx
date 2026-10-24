import Badge from "./Badge.jsx";
import Frame from "./Frame.jsx";
import InfoRow from "./InfoRow.jsx";

function TicketCard({ id, subject, status, assignedTo = "Unassigned" }) {
  return (
    <Frame title={subject} subtitle={`Ticket ${id}`}>
      <div className="q4-card-badge">
        <Badge label={status} />
      </div>
      <div className="q4-info-list">
        <InfoRow label="Assigned to" value={assignedTo} />
      </div>
    </Frame>
  );
}

export default TicketCard;

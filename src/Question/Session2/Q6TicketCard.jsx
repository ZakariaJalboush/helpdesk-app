import Q6Badge from "./Q6Badge.jsx";

function Q6TicketCard({
  id,
  subject,
  status,
  priority,
  assignedTo = "Unassigned",
}) {
  return (
    <article className="q6-ticket-card">
      <div className="q6-ticket-heading">
        <div>
          <p className="q6-ticket-id">Ticket #{id}</p>
          <h3 className="q6-ticket-subject">{subject}</h3>
        </div>
        <Q6Badge label={status} />
      </div>
      <div className="q6-ticket-footer">
        <Q6Badge label={priority} type="priority" />
        <p className="q6-ticket-assignee">
          Assigned to <strong>{assignedTo}</strong>
        </p>
      </div>
    </article>
  );
}

export default Q6TicketCard;

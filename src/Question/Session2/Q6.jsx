import "./Q6.css";
import Q6Dashboard from "./Q6Dashboard.jsx";

function Q6() {
  const systemName = "Helpdesk Support Center";

  const tickets = [
    {
      id: 1001,
      subject: "Login Issue",
      status: "Open",
      priority: "High",
      assignedTo: "Ahmad",
    },
    {
      id: 1002,
      subject: "Payment Failure",
      status: "Pending",
      priority: "High",
      assignedTo: "Sara",
    },
    {
      id: 1003,
      subject: "Report Download",
      status: "Closed",
      priority: "Low",
      assignedTo: "Ahmad",
    },
    {
      id: 1004,
      subject: "Password Reset",
      status: "Open",
      priority: "Normal",
    },
  ];

  const agents = [
    { name: "Ahmad", role: "Team Lead", capacity: 4 },
    { name: "Sara", role: "Support Agent", capacity: 3 },
    { name: "Omar", role: "Support Agent", capacity: 2 },
  ];

  return (
    <Q6Dashboard
      systemName={systemName}
      tickets={tickets}
      agents={agents}
    />
  );
}

export default Q6;

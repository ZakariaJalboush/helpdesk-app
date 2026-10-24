const toneByStatus = {
  Open: "blue",
  Pending: "orange",
  Closed: "green",
};

const toneByPriority = {
  High: "red",
  Normal: "blue",
  Low: "gray",
};

function Q6Badge({ label, type = "status" }) {
  const toneMap = type === "priority" ? toneByPriority : toneByStatus;
  const tone = toneMap[label] ?? "gray";

  return (
    <span className={`q6-badge q6-badge-${tone}`}>
      {label}
    </span>
  );
}

export default Q6Badge;

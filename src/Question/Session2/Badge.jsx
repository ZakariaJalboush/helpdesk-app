function Badge({ label, tone = "blue" }) {
  return <span className={`q4-badge q4-badge-${tone}`}>{label}</span>;
}

export default Badge;

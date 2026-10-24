function InfoRow({ label, value }) {
  return (
    <div className="q4-info-row">
      <span className="q4-info-label">{label}</span>
      <span className="q4-info-value">{value}</span>
    </div>
  );
}

export default InfoRow;

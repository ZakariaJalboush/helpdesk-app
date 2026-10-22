function StatCard({ title, value = 0 }) {
  return (
    <article className="stat-card">
      <p className="stat-title">{title}</p>
      <p className="stat-value">{value}</p>
    </article>
  );
}
//yanal
export default StatCard;

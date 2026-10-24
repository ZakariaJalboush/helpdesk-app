import "./Q3.css";

function StatCard({ title, value = 0 }) {
  return (
    <article className="stat-card">
      <p className="stat-title">{title}</p>
      <p className="stat-value">{value ?? 0}</p>
    </article>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h2 className="panel-title">{title}</h2>
      {children}
    </section>
  );
}

function Q3() {
  const open = 35;
  const closed = 70;
  const pending = 15;
  const total = open + closed + pending;
  const active = open + pending;

  return (
    <main className="app-shell">
      <header className="page-header">
        <div className="brand-mark" aria-hidden="true">
          HD
        </div>
        <div>
          <p className="eyebrow">SUPPORT OPERATIONS</p>
          <h1>Ticket Dashboard</h1>
          <p className="page-description">
            A summary of ticket statuses across your support team.
          </p>
        </div>
      </header>

      <Panel title="Ticket Summary">
        <p className="panel-description">
          Review open, closed, pending, and active tickets.
        </p>
        <div className="stats-grid">
          <StatCard title="Open" value={open} />
          <StatCard title="Closed" value={closed} />
          <StatCard title="Pending" value={pending} />
          <StatCard title="Total" value={total} />
          <StatCard title="Active" value={active} />
          <StatCard title="Unassigned" />
        </div>
      </Panel>
    </main>
  );
}

export default Q3;

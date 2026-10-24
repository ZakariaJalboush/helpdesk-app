function Q6Panel({ title, children }) {
  return (
    <section className="q6-panel">
      <h2 className="q6-panel-title">{title}</h2>
      {children}
    </section>
  );
}

export default Q6Panel;

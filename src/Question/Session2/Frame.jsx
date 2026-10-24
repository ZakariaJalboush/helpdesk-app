function Frame({ title, subtitle = "Support Center", children }) {
  return (
    <article className="q4-frame">
      <header className="q4-frame-header">
        <h2 className="q4-frame-title">{title}</h2>
        <p className="q4-frame-subtitle">{subtitle}</p>
      </header>
      <div className="q4-frame-content">{children}</div>
    </article>
  );
}

export default Frame;

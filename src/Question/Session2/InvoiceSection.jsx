function InvoiceSection({ title, children }) {
  return (
    <section className="q5-section">
      <h2 className="q5-section-title">{title}</h2>
      {children}
    </section>
  );
}

export default InvoiceSection;

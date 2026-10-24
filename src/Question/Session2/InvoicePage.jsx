import InvoiceLine from "./InvoiceLine.jsx";
import InvoiceSection from "./InvoiceSection.jsx";
import InvoiceSummary from "./InvoiceSummary.jsx";

function InvoicePage({ items, discountPercent = 0, taxPercent = 0 }) {
  const lines = items.map((item) => ({
    ...item,
    total: item.unitPrice * item.quantity,
  }));
  const subtotal = lines.reduce((sum, item) => sum + item.total, 0);

  return (
    <main className="q5-page">
      <header className="q5-page-header">
        <p className="q5-eyebrow">SUPPORT OPERATIONS</p>
        <h1>Service Invoice</h1>
        <p className="q5-page-description">
          A clear breakdown of technical support services and charges.
        </p>
      </header>

      <InvoiceSection title="Invoice items">
        <div className="q5-invoice-list">
          {lines.map((item) => (
            <InvoiceLine
              key={item.id}
              description={item.description}
              quantity={item.quantity}
              unitPrice={item.unitPrice}
              total={item.total}
            />
          ))}
        </div>
      </InvoiceSection>

      <InvoiceSection title="Invoice summary">
        <InvoiceSummary
          subtotal={subtotal}
          discountPercent={discountPercent}
          taxPercent={taxPercent}
        />
      </InvoiceSection>
    </main>
  );
}

export default InvoicePage;

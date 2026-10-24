import MoneyRow from "./MoneyRow.jsx";

function InvoiceLine({ description, quantity, unitPrice, total }) {
  return (
    <article className="q5-invoice-line">
      <div className="q5-line-description">
        <span className="q5-line-label">Item</span>
        <span className="q5-line-value">{description}</span>
      </div>
      <div className="q5-line-quantity">
        <span className="q5-line-label">Quantity</span>
        <span className="q5-line-value">{quantity}</span>
      </div>
      <MoneyRow label="Unit price" amount={unitPrice} />
      <MoneyRow label="Line total" amount={total} />
    </article>
  );
}

export default InvoiceLine;

import MoneyRow from "./MoneyRow.jsx";

function InvoiceSummary({
  subtotal,
  discountPercent = 0,
  taxPercent = 0,
}) {
  const discount = (subtotal * discountPercent) / 100;
  const afterDiscount = subtotal - discount;
  const tax = (afterDiscount * taxPercent) / 100;
  const grandTotal = afterDiscount + tax;

  return (
    <div className="q5-summary">
      <MoneyRow label="Subtotal" amount={subtotal} />
      <MoneyRow
        label={`Discount (${discountPercent}%)`}
        amount={discount}
      />
      <MoneyRow label="After discount" amount={afterDiscount} />
      <MoneyRow label={`Tax (${taxPercent}%)`} amount={tax} />
      <div className="q5-grand-total">
        <MoneyRow label="Grand total" amount={grandTotal} />
      </div>
    </div>
  );
}

export default InvoiceSummary;

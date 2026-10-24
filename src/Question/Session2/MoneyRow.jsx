function MoneyRow({ label, amount, currency = "JOD" }) {
  const formattedAmount = amount.toFixed(2);

  return (
    <div className="q5-money-row">
      <span className="q5-money-label">{label}</span>
      <span className="q5-money-value">
        {formattedAmount} <span className="q5-currency">{currency}</span>
      </span>
    </div>
  );
}

export default MoneyRow;

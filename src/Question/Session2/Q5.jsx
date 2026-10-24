import "./Q5.css";
import InvoicePage from "./InvoicePage.jsx";

function Q5() {
  const items = [
    { id: 1, description: "Frontend Support", unitPrice: 40, quantity: 3 },
    { id: 2, description: "Code Review", unitPrice: 25, quantity: 2 },
    { id: 3, description: "Technical Report", unitPrice: 10, quantity: 3 },
  ];

  return (
    <InvoicePage items={items} discountPercent={10} taxPercent={5} />
  );
}

export default Q5;

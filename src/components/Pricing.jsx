import React from "react";

const pricingData = [
  {
    id: "apt",
    title: "Уборка квартир",
    description: "Ежедневная, генеральная, после ремонта",
    price: "от 1500 ₽",
  },
  {
    id: "office",
    title: "Уборка офисов",
    description: "Регулярная уборка рабочих пространств",
    price: "от 3000 ₽",
  },
  {
    id: "dry",
    title: "Химчистка",
    description: "Мягкая мебель, ковры, матрасы",
    price: "от 1200 ₽",
  },
];

function Pricing() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Расценки</h2>
        <p>Прозрачные цены без скрытых платежей.</p>
      </div>
      <div className="grid cards">
        {pricingData.map((item) => (
          <article
            key={item.id}
            className="card"
            aria-labelledby={`card-${item.id}`}
          >
            <h3 id={`card-${item.id}`}>{item.title}</h3>
            <p className="muted">{item.description}</p>
            <p className="price">{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;

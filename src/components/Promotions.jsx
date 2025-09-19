import React from "react";
import styled from "styled-components";

const promotions = [
  {
    id: "p1",
    title: "Скидка 20% на первую уборку",
    details: "Для новых клиентов до конца месяца.",
  },
  {
    id: "p2",
    title: "Каждая 5-я уборка бесплатно",
    details: "По абонементу офисной уборки.",
  },
  {
    id: "p3",
    title: "Химчистка со скидкой 15%",
    details: "При заказе вместе с генеральной уборкой.",
  },
];

const Section = styled.section`
  padding: 24px 0;
`;

const SectionHeader = styled.div``;

const SectionTitle = styled.h2`
  margin: 0 0 6px;
`;

const SectionSubtitle = styled.p`
  color: var(--muted);
`;

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const Card = styled.article`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px;
`;

const CardDescription = styled.p`
  color: var(--muted);
  margin: 0;
`;

function Promotions() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Акции и предложения</SectionTitle>
        <SectionSubtitle>
          Выгодные условия для постоянных и новых клиентов.
        </SectionSubtitle>
      </SectionHeader>
      <Grid>
        {promotions.map((promo) => (
          <Card key={promo.id} aria-labelledby={`promo-${promo.id}`}>
            <CardTitle id={`promo-${promo.id}`}>{promo.title}</CardTitle>
            <CardDescription>{promo.details}</CardDescription>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Promotions;

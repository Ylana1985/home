import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Hero = styled.section`
  padding: 56px 0 24px;
  border-bottom: 1px solid var(--border);
  background: radial-gradient(
      60% 60% at 80% 10%,
      rgba(56, 189, 248, 0.08),
      transparent
    ),
    radial-gradient(30% 40% at 10% 20%, rgba(14, 165, 233, 0.08), transparent);
`;

const HeroInner = styled.div`
  width: min(1120px, 92%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 24px;
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const HeroTitle = styled.h1`
  margin: 0 0 10px;
  font-size: clamp(24px, 4vw, 40px);
`;

const HeroSubtitle = styled.p`
  color: var(--muted);
`;

const HeroActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const Button = styled(NavLink)`
  color: var(--text);
  border: 1px solid var(--border);
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
  background: #0b1328;

  &.primary {
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border: none;
  }

  &.outline {
    background: transparent;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const HeroArt = styled.div`
  height: 220px;
  position: relative;

  @media (max-width: 860px) {
    order: -1;
    height: 160px;
  }
`;

const Bubble = styled.div`
  position: absolute;
  right: 0;
  width: 160px;
  height: 160px;
  background: radial-gradient(circle at 30% 30%, #38bdf8, #0ea5e9);
  border-radius: 50%;
  filter: blur(4px);
  opacity: 0.7;

  &.small {
    right: 120px;
    top: 120px;
    width: 80px;
    height: 80px;
    opacity: 0.6;
  }

  &.tiny {
    right: 200px;
    top: 60px;
    width: 40px;
    height: 40px;
    opacity: 0.5;
  }
`;

function Home() {
  return (
    <Hero>
      <HeroInner>
        <div>
          <HeroTitle>Профессиональные клининговые услуги</HeroTitle>
          <HeroSubtitle>
            Уборка квартир и офисов, химчистка и специальные предложения по
            доступным ценам.
          </HeroSubtitle>
          <HeroActions>
            <Button className="primary" to="/pricing">
              Посмотреть цены
            </Button>
            <Button to="/promotions">Акции</Button>
            <Button className="outline" to="/contact">
              Связаться
            </Button>
          </HeroActions>
        </div>
        <HeroArt aria-hidden>
          <Bubble />
          <Bubble className="small" />
          <Bubble className="tiny" />
        </HeroArt>
      </HeroInner>
    </Hero>
  );
}

export default Home;

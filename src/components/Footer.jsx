import React from "react";
import styled from "styled-components";

const SiteFooter = styled.footer`
  border-top: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.8);
  margin-top: 24px;
`;

const FooterInner = styled.div`
  width: min(1120px, 92%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
`;

const FooterText = styled.p`
  color: var(--muted);
  margin: 0;
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 14px;
  margin: 0;
  padding: 0;
`;

const FooterLink = styled.a`
  color: var(--muted);
  text-decoration: none;

  &:hover {
    color: var(--text);
  }
`;

function Footer() {
  return (
    <SiteFooter>
      <FooterInner>
        <FooterText>© 2024 Клининговые услуги. Все права защищены.</FooterText>
        <FooterLinks>
          <li>
            <FooterLink href="tel:+7-800-123-45-67">
              +7 (800) 123-45-67
            </FooterLink>
          </li>
          <li>
            <FooterLink href="mailto:info@cleaning-service.ru">
              info@cleaning-service.ru
            </FooterLink>
          </li>
        </FooterLinks>
      </FooterInner>
    </SiteFooter>
  );
}

export default Footer;

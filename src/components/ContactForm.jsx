import React, { useState } from "react";
import styled from "styled-components";

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

const Form = styled.form`
  display: grid;
  gap: 12px;
  max-width: 640px;
`;

const FormRow = styled.div`
  display: grid;
  gap: 6px;
`;

const Label = styled.label`
  color: var(--text);
  font-weight: 500;
`;

const Input = styled.input`
  background: #0b1328;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 12px;

  &:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  &::placeholder {
    color: var(--muted);
  }
`;

const Textarea = styled.textarea`
  background: #0b1328;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 12px;
  resize: vertical;

  &:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  &::placeholder {
    color: var(--muted);
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const SubmitButton = styled.button`
  color: var(--text);
  border: 1px solid var(--border);
  padding: 10px 14px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  border: none;
  cursor: pointer;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Status = styled.p`
  margin: 0;

  &.error {
    color: #fca5a5;
  }

  &.success {
    color: #86efac;
  }
`;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "idle", text: "" });

  function validateEmail(value) {
    return /\S+@\S+\.\S+/.test(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim()) {
      setStatus({ type: "error", text: "Введите имя." });
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ type: "error", text: "Введите корректный email." });
      return;
    }
    if (message.trim().length < 10) {
      setStatus({
        type: "error",
        text: "Сообщение должно содержать минимум 10 символов.",
      });
      return;
    }

    setStatus({ type: "loading", text: "Отправка..." });
    setTimeout(() => {
      setStatus({
        type: "success",
        text: "Спасибо! Мы свяжемся с вами в ближайшее время.",
      });
      setName("");
      setEmail("");
      setMessage("");
    }, 800);
  }

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Связаться с нами</SectionTitle>
        <SectionSubtitle>
          Оставьте ваши контакты и сообщение — мы ответим.
        </SectionSubtitle>
      </SectionHeader>
      <Form onSubmit={handleSubmit} noValidate>
        <FormRow>
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ваше имя"
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="message">Сообщение</Label>
          <Textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Кратко опишите задачу"
          />
        </FormRow>
        <FormActions>
          <SubmitButton type="submit" disabled={status.type === "loading"}>
            {status.type === "loading" ? "Отправка..." : "Отправить"}
          </SubmitButton>
          {status.type === "error" && (
            <Status className="error" role="alert">
              {status.text}
            </Status>
          )}
          {status.type === "success" && (
            <Status className="success" role="status">
              {status.text}
            </Status>
          )}
        </FormActions>
      </Form>
    </Section>
  );
}

export default ContactForm;

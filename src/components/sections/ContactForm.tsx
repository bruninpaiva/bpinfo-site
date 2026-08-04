"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fieldClasses(hasError: boolean) {
  return `w-full border-b bg-transparent py-3 text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent ${
    hasError ? "border-accent" : "border-border-strong"
  }`;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!values.name.trim()) nextErrors.name = "Informe seu nome.";
    if (!values.email.trim() || !emailPattern.test(values.email)) {
      nextErrors.email = "Informe um e-mail válido.";
    }
    if (!values.phone.trim()) nextErrors.phone = "Informe um telefone.";
    if (!values.message.trim()) nextErrors.message = "Escreva uma mensagem.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const lines = [
      `Nome: ${values.name}`,
      values.company ? `Empresa: ${values.company}` : null,
      `Telefone: ${values.phone}`,
      `E-mail: ${values.email}`,
      values.subject ? `Assunto: ${values.subject}` : null,
      "",
      values.message,
    ].filter(Boolean);

    window.open(buildWhatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs uppercase tracking-[0.1em] text-fg-subtle">
            Nome
          </label>
          <input
            id="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClasses(Boolean(errors.name))}
            placeholder="Seu nome"
          />
          {errors.name ? <p className="mt-1 text-xs text-accent">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="company" className="text-xs uppercase tracking-[0.1em] text-fg-subtle">
            Empresa
          </label>
          <input
            id="company"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className={fieldClasses(false)}
            placeholder="Nome da empresa"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-xs uppercase tracking-[0.1em] text-fg-subtle">
            Telefone
          </label>
          <input
            id="phone"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClasses(Boolean(errors.phone))}
            placeholder="(00) 00000-0000"
          />
          {errors.phone ? <p className="mt-1 text-xs text-accent">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-[0.1em] text-fg-subtle">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClasses(Boolean(errors.email))}
            placeholder="voce@empresa.com.br"
          />
          {errors.email ? <p className="mt-1 text-xs text-accent">{errors.email}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-xs uppercase tracking-[0.1em] text-fg-subtle">
          Assunto
        </label>
        <input
          id="subject"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          className={fieldClasses(false)}
          placeholder="Ex.: Demonstração do ORBYT"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-[0.1em] text-fg-subtle">
          Mensagem
        </label>
        <textarea
          id="message"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          className={fieldClasses(Boolean(errors.message))}
          placeholder="Conte um pouco sobre a sua operação e o que precisa"
        />
        {errors.message ? <p className="mt-1 text-xs text-accent">{errors.message}</p> : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit">Enviar pelo WhatsApp</Button>
        <p className="text-xs text-fg-subtle">
          Ao enviar, o WhatsApp será aberto com sua mensagem já preenchida
          para {siteConfig.name}.
        </p>
      </div>
    </form>
  );
}

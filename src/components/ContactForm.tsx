"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Podaj imię i nazwisko (min. 2 znaki).";
  }

  if (!values.email.trim()) {
    errors.email = "Podaj adres e-mail.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Podaj poprawny adres e-mail.";
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Wiadomość powinna mieć co najmniej 10 znaków.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormState];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // Stub: brak backendu — symulacja sukcesu
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(true);
    setValues(initial);
  }

  return (
    <section
      id="kontakt"
      className="border-b border-border py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-medium tracking-wide text-accent-dark">
            Kontakt
          </p>
          <h2
            id="contact-heading"
            className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Porozmawiajmy o Twoim projekcie
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Opisz krótko wyzwanie lub pomysł. Odpowiadamy zwykle w ciągu 1–2
            dni roboczych.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-muted">E-mail</dt>
              <dd className="mt-1 font-medium text-foreground">
                <a
                  href="mailto:kontakt@aether-ai.example"
                  className="hover:text-accent-dark"
                >
                  kontakt@aether-ai.example
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Lokalizacja</dt>
              <dd className="mt-1 font-medium text-foreground">Polska / UE</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          {submitted ? (
            <div
              role="status"
              className="flex h-full min-h-[280px] flex-col items-start justify-center"
            >
              <p className="text-lg font-semibold text-foreground">
                Dziękujemy za wiadomość
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Formularz został przyjęty (wersja demonstracyjna — bez
                wysyłki na serwer). Skontaktujemy się wkrótce.
              </p>
              <button
                type="button"
                className="mt-6 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-foreground/20"
                onClick={() => setSubmitted(false)}
              >
                Wyślij kolejną wiadomość
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Imię i nazwisko
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted/70 focus:border-accent"
                  placeholder="Jan Kowalski"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-700" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted/70 focus:border-accent"
                  placeholder="jan@firma.pl"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-700" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground"
                >
                  Firma{" "}
                  <span className="font-normal text-muted">(opcjonalnie)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={values.company}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted/70 focus:border-accent"
                  placeholder="Nazwa firmy"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className="mt-1.5 w-full resize-y rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted/70 focus:border-accent"
                  placeholder="Opisz krótko projekt lub pytanie…"
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 text-xs text-red-700"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Wysyłanie…" : "Wyślij wiadomość"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

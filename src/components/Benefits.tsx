const benefits = [
  {
    title: "Szybsze decyzje",
    description:
      "Dostęp do wiedzy organizacji w sekundach — zamiast godzin przeszukiwania dokumentów i systemów.",
  },
  {
    title: "Niższe koszty operacyjne",
    description:
      "Automatyzacja rutynowych zadań odciąża zespoły i ogranicza błędy manualne.",
  },
  {
    title: "Kontrola ryzyka",
    description:
      "Wdrożenia z naciskiem na prywatność danych, audytowalność i zgodność z wymaganiami branżowymi.",
  },
  {
    title: "Skalowalność",
    description:
      "Architektura gotowa na wzrost obciążenia i rozwój funkcji bez kosztownego przepisywania.",
  },
  {
    title: "Przejrzyste koszty",
    description:
      "Jasny model wyceny i monitoring zużycia modeli — bez niespodzianek na fakturze.",
  },
  {
    title: "Transfer wiedzy",
    description:
      "Dokumentacja, szkolenia i wsparcie, dzięki którym Twój zespół samodzielnie utrzymuje rozwiązanie.",
  },
];

export default function Benefits() {
  return (
    <section
      id="korzysci"
      className="border-b border-border py-20 sm:py-24"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-accent-dark">
            Korzyści
          </p>
          <h2
            id="benefits-heading"
            className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Dlaczego warto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Skupiamy się na efektach biznesowych — nie na technologicznym
            pokazie.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div
                className="mb-4 h-1 w-8 rounded-full bg-accent"
                aria-hidden="true"
              />
              <h3 className="text-base font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

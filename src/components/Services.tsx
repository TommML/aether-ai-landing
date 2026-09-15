const services = [
  {
    title: "Wdrożenia LLM",
    description:
      "Integracja modeli językowych z istniejącymi systemami: asystenci wewnętrzni, wyszukiwanie w dokumentacji, wsparcie obsługi klienta.",
  },
  {
    title: "Automatyzacja",
    description:
      "Automatyzacja powtarzalnych procesów z wykorzystaniem AI — od klasyfikacji dokumentów po orkiestrację workflow między systemami.",
  },
  {
    title: "Custom AI",
    description:
      "Dedykowane modele i rozwiązania dopasowane do danych, procesów i wymagań branżowych Twojej organizacji.",
  },
  {
    title: "Doradztwo",
    description:
      "Strategia AI, audyt potencjału, mapa wdrożeń i rekomendacje technologiczne oparte na realnych możliwościach, nie trendach.",
  },
];

export default function Services() {
  return (
    <section
      id="uslugi"
      className="border-b border-border py-20 sm:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-accent-dark">
            Usługi
          </p>
          <h2
            id="services-heading"
            className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Co robimy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Kompleksowe wsparcie — od analizy możliwości po produkcyjne
            wdrożenie i utrzymanie rozwiązań AI.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40 sm:p-8"
            >
              <span className="font-mono text-xs text-muted">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

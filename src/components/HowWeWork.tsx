const steps = [
  {
    title: "Diagnoza",
    description:
      "Analizujemy procesy, dane i cele biznesowe. Identyfikujemy obszary, w których AI przyniesie mierzalną wartość.",
  },
  {
    title: "Projekt",
    description:
      "Projektujemy architekturę rozwiązania, zakres MVP i kryteria sukcesu — z uwzględnieniem bezpieczeństwa i kosztów.",
  },
  {
    title: "Wdrożenie",
    description:
      "Budujemy, integrujemy i testujemy rozwiązanie w środowisku produkcyjnym, wspólnie z zespołem klienta.",
  },
  {
    title: "Optymalizacja",
    description:
      "Monitorujemy jakość, koszty i adopcję. Iterujemy na podstawie danych i feedbacku użytkowników.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="proces"
      className="border-b border-border bg-card py-20 sm:py-24"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-accent-dark">
            Proces
          </p>
          <h2
            id="process-heading"
            className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Jak pracujemy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Przejrzysty, etapowy model współpracy — od pierwszej rozmowy do
            stabilnego działania systemu.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-accent-dark">
                {index + 1}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

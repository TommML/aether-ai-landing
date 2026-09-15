export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 0%, rgba(13,148,136,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8 lg:py-32">
        <div className="lg:col-span-7">
          <p className="mb-4 text-sm font-medium tracking-wide text-accent-dark">
            Wdrożenia AI dla firm
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
          >
            Inteligentne systemy, które realnie wspierają biznes
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Pomagamy organizacjom wdrażać modele językowe, automatyzować procesy
            i budować rozwiązania AI dopasowane do strategii, danych i
            wymagań operacyjnych — bez zbędnego szumu.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Umów rozmowę
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/20"
            >
              Zobacz usługi
            </a>
          </div>
        </div>

        <aside className="flex flex-col justify-end gap-4 lg:col-span-5">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Podejście
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                Najpierw problem biznesowy, potem technologia
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                Bezpieczeństwo danych i zgodność z regulacjami
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                Mierzalne efekty i kontrolowany koszt wdrożenia
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "LLM", label: "Wdrożenia" },
              { value: "ROI", label: "Orientacja" },
              { value: "B2B", label: "Fokus" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-card px-3 py-4 text-center"
              >
                <p className="text-sm font-semibold text-foreground">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

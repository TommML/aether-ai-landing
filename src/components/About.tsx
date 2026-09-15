export default function About() {
  return (
    <section
      id="o-nas"
      className="border-b border-border bg-card py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-medium tracking-wide text-accent-dark">
            O nas
          </p>
          <h2
            id="about-heading"
            className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Aether AI
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Jesteśmy zespołem inżynierów i doradców specjalizujących się we
            wdrażaniu sztucznej inteligencji w środowisku B2B. Łączymy
            doświadczenie produktowe z rzetelną inżynierią oprogramowania.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Pracujemy z firmami, które chcą wprowadzać AI odpowiedzialnie —
            z jasnym celem, mierzalnymi wskaźnikami i pełną kontrolą nad
            danymi. Nazwa marki jest obecnie placeholderem.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-6">
              <dt className="text-sm text-muted">Fokus</dt>
              <dd className="mt-2 text-lg font-semibold text-foreground">
                Enterprise & mid-market
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <dt className="text-sm text-muted">Model pracy</dt>
              <dd className="mt-2 text-lg font-semibold text-foreground">
                Projekt + partnerstwo
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-background p-6 sm:col-span-2">
              <dt className="text-sm text-muted">Zasady</dt>
              <dd className="mt-2 text-base leading-relaxed text-foreground">
                Przejrzystość, bezpieczeństwo danych, dokumentacja i
                mierzalne rezultaty — od pierwszej warsztatowej sesji.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

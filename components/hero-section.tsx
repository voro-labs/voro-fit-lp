import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              7 dias grátis para testar
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Treinos, dieta e acompanhamento dos alunos — <span className="text-primary">tudo no mesmo lugar.</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              O software inteligente para personal trainers que querem escalar seus resultados e manter seus alunos
              motivados.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 px-8" asChild>
                <Link href="#planos">
                  Começar agora
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <Play className="h-4 w-4" />
                Ver demonstração
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-4 w-4 fill-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">+2.500</span> personal trainers
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-tr from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl">
              <div className="aspect-4/3 rounded-xl bg-muted">
                <img
                  src="/fitness-app-dashboard-with-workout-plans-and-stude.png"
                  alt="Dashboard do VoroFitPro mostrando gestão de alunos e treinos"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Treino enviado!</p>
                  <p className="text-xs text-muted-foreground">João completou o treino A</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 rounded-xl border border-border bg-card p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">
                  Taxa de
                  <br />
                  retenção
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

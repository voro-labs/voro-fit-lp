import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Crie exercícios ou escolha existentes",
    description: "Acesse nossa biblioteca com centenas de exercícios ou adicione os seus próprios com vídeos.",
  },
  {
    number: "02",
    title: "Monte treinos e plano alimentar",
    description: "Combine exercícios em treinos personalizados e estruture a dieta ideal para cada aluno.",
  },
  {
    number: "03",
    title: "Envie para o aluno",
    description: "Com um clique, envie tudo para o WhatsApp ou app do aluno. Simples assim.",
  },
  {
    number: "04",
    title: "Acompanhe o progresso",
    description: "Visualize métricas, evolução e engajamento em tempo real no seu painel.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Como funciona
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Simples de usar, poderoso nos resultados
          </h2>
          <p className="text-lg text-muted-foreground">
            Em apenas 4 passos você terá seus alunos organizados e motivados.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2 lg:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex gap-6 lg:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="hidden lg:block lg:w-1/2" />

                  <div className="absolute left-8 top-6 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary lg:left-1/2 lg:block" />

                  <Card className="w-full border-border/50 bg-card lg:w-1/2">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-4">
                        <span className="text-3xl font-bold text-primary/30">{step.number}</span>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

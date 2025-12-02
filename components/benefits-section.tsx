import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Video, Utensils, TrendingUp, MessageCircle, Bell } from "lucide-react"

const benefits = [
  {
    icon: Dumbbell,
    title: "Criação de treinos personalizados",
    description: "Monte treinos sob medida para cada aluno com nossa interface intuitiva de arrastar e soltar.",
  },
  {
    icon: Video,
    title: "Biblioteca de exercícios com vídeos",
    description: "Acesso a centenas de exercícios com vídeos demonstrativos profissionais.",
  },
  {
    icon: Utensils,
    title: "Estrutura de dieta com horários",
    description: "Crie planos alimentares completos com macros, horários e substituições.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento e progresso",
    description: "Visualize a evolução dos seus alunos com gráficos detalhados e métricas.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação via WhatsApp",
    description: "Envie treinos e dietas diretamente no WhatsApp dos seus alunos.",
  },
  {
    icon: Bell,
    title: "Automação de mensagens",
    description: "Configure lembretes automáticos para manter seus alunos engajados.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Funcionalidades
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Tudo que você precisa para gerenciar seus alunos
          </h2>
          <p className="text-lg text-muted-foreground">
            Simplifique sua rotina com ferramentas poderosas criadas especialmente para personal trainers.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

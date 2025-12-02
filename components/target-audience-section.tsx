import { Card, CardContent } from "@/components/ui/card"
import { Users, UserPlus, Building2, Globe } from "lucide-react"

const audiences = [
  {
    icon: UserPlus,
    title: "Personal trainers iniciantes",
    description: "Organize seus primeiros alunos e comece com o pé direito na carreira.",
  },
  {
    icon: Users,
    title: "Personal trainers com muitos alunos",
    description: "Escale seu atendimento sem perder a qualidade e personalização.",
  },
  {
    icon: Building2,
    title: "Academias",
    description: "Gerencie toda sua equipe de personal trainers em uma única plataforma.",
  },
  {
    icon: Globe,
    title: "Consultorias fitness online",
    description: "Atenda alunos de qualquer lugar do mundo com eficiência.",
  },
]

export function TargetAudienceSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Para quem é
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Feito para profissionais como você
          </h2>
          <p className="text-lg text-muted-foreground">
            Independente do seu momento de carreira, o VoroFitPro se adapta às suas necessidades.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-md"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <audience.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

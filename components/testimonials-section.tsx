import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Agora consigo gerenciar 30 alunos com facilidade. Antes eu perdia horas montando planilhas, hoje faço em minutos.",
    author: "João Silva",
    role: "Personal Trainer",
    avatar: "/professional-male-fitness-trainer.png",
  },
  {
    quote: "Meus alunos adoram receber os treinos pelo WhatsApp. A retenção aumentou 40% desde que comecei a usar.",
    author: "Ana Costa",
    role: "Personal Trainer",
    avatar: "/professional-female-fitness-trainer.png",
  },
  {
    quote:
      "A biblioteca de exercícios com vídeos é incrível. Economizo muito tempo e meus alunos executam os exercícios corretamente.",
    author: "Pedro Mendes",
    role: "Personal Trainer",
    avatar: "/professional-male-personal-trainer-portrait-smilin.jpg",
  },
  {
    quote:
      "Finalmente consegui escalar meu negócio. De 10 alunos presenciais passei a atender 50 online com qualidade.",
    author: "Carla Oliveira",
    role: "Personal Trainer Online",
    avatar: "/professional-female-fitness-coach.png",
  },
  {
    quote: "O suporte é excepcional e a plataforma está sempre evoluindo. Melhor investimento que fiz no meu negócio.",
    author: "Ricardo Santos",
    role: "Personal Trainer",
    avatar: "/professional-male-gym-trainer-portrait.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 2.500 personal trainers já transformaram seus negócios com o VoroFitPro.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-border/50 bg-card ${index === 3 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-6 text-foreground leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Ideal para quem está começando",
    price: "29",
    period: "/mês",
    features: [
      "Até 5 alunos",
      "Biblioteca de exercícios base",
      "Plano alimentar simples",
      "Suporte por email",
      "App para alunos",
    ],
    highlighted: false,
    cta: "Começar grátis",
  },
  {
    name: "Professional",
    description: "Para personal trainers em crescimento",
    price: "79",
    period: "/mês",
    features: [
      "Até 30 alunos",
      "Customização de exercícios",
      "Plano alimentar completo",
      "Envio via WhatsApp",
      "Relatórios de progresso",
      "Suporte prioritário",
    ],
    highlighted: true,
    cta: "Começar grátis",
    badge: "Mais popular",
  },
  {
    name: "Elite",
    description: "Para profissionais de alta performance",
    price: "149",
    period: "/mês",
    features: [
      "Alunos ilimitados",
      "Automações avançadas",
      "IA para sugestões de treino",
      "Marca própria (white label)",
      "API para integrações",
      "Suporte VIP 24/7",
    ],
    highlighted: false,
    cta: "Começar grátis",
  },
]

export function PricingSection() {
  return (
    <section id="planos" className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Planos</span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-muted-foreground">
            Todos os planos incluem 7 dias de teste grátis. Cancele quando quiser.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.highlighted ? "border-primary bg-card shadow-xl shadow-primary/10" : "border-border/50 bg-card"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    {plan.badge}
                  </span>
                </div>
              )}

              <CardHeader className="pb-0 pt-8">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex-1 pt-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">R$ {plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4">
                <Link href={`https://wa.me/555399999999?text=Olá!%20Escolhi%20o%20plano%20${plan.name}.`} target="_blank" className="w-full">
                  <Button className="w-full" variant={plan.highlighted ? "default" : "outline"} size="lg">
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

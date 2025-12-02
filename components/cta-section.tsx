import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="bg-foreground py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-background sm:text-4xl">
            Pronto para transformar seu negócio?
          </h2>
          <p className="mb-8 text-lg text-background/70">
            Junte-se a mais de 2.500 personal trainers que já estão usando o VoroFitPro para escalar seus resultados.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="gap-2 px-8" asChild>
              <Link href="#planos">
                Começar 7 dias grátis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              Falar com vendas
            </Button>
          </div>
          <p className="mt-6 text-sm text-background/50">Não precisa de cartão de crédito • Cancele quando quiser</p>
        </div>
      </div>
    </section>
  )
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "O aluno precisa instalar algum app?",
    answer:
      "Não obrigatoriamente. Os alunos podem receber os treinos e dietas diretamente pelo WhatsApp. Mas também oferecemos um app exclusivo para alunos onde eles podem acompanhar tudo de forma organizada.",
  },
  {
    question: "Posso usar no celular?",
    answer:
      "Sim! O VoroFitPro é totalmente responsivo e funciona perfeitamente em celulares, tablets e computadores. Você pode gerenciar seus alunos de qualquer lugar.",
  },
  {
    question: "Posso exportar os treinos?",
    answer:
      "Sim, você pode exportar os treinos em PDF para imprimir ou enviar por email. Também é possível exportar relatórios de progresso dos alunos.",
  },
  {
    question: "Tem teste grátis?",
    answer:
      "Sim! Oferecemos 7 dias de teste grátis em todos os planos, sem necessidade de cartão de crédito. Você pode explorar todas as funcionalidades antes de decidir.",
  },
  {
    question: "Como funciona o envio pelo WhatsApp?",
    answer:
      "Você pode enviar treinos e dietas diretamente para o WhatsApp do aluno com apenas um clique. Também é possível configurar mensagens automáticas de lembrete e motivação.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, você pode cancelar sua assinatura a qualquer momento, sem multas ou burocracia. Seu acesso permanece ativo até o final do período pago.",
  },
  {
    question: "Vocês oferecem suporte?",
    answer:
      "Sim! Todos os planos incluem suporte. O plano Starter tem suporte por email, o Professional tem suporte prioritário e o Elite tem suporte VIP 24/7 por chat e telefone.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">FAQ</span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">Perguntas frequentes</h2>
          <p className="text-lg text-muted-foreground">Tire suas dúvidas sobre o VoroFitPro.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

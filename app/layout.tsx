import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VoroFitPro - Software para Personal Trainers",
  description:
    "O software inteligente para personal trainers que querem escalar seus resultados e manter seus alunos motivados. Treinos, dieta e acompanhamento em um só lugar.",
  keywords: ["personal trainer", "software fitness", "gestão de alunos", "treinos personalizados", "plano alimentar"],
    generator: 'vorolabs.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

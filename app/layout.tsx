import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIChatbotClient } from "@/components/ai-chatbot-client"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Kwetjiwe Consulting | Business & Financial Solutions",
  description:
    "Bridging the gap between clients and funders. Expert capital raising and transaction advisory services.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <AIChatbotClient />
        <Footer />
      </body>
    </html>
  )
}

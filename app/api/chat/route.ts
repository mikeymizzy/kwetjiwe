import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { GoogleGenerativeAI } from "@google/generative-ai"

type ClientMessage = { role: "user" | "assistant"; content: string }

const siteContext =
  "You are the AI assistant for Kwetjiwe Consulting (Pty) Ltd, a business and financial solutions company that bridges clients and funders. Services include business development, transaction advisory, capital raising, restructuring, and executive mentorship. They operate as a subsidiary of Bodibe Ba Thaba Holdings and support clients across sectors, including hospitality, franchises, student housing, and more. Use factual info from the company profile PDF (attached) and the website context above. If information is missing, say you do not have that detail."

function loadCompanyProfileAsBase64() {
  try {
    const pdfPath = path.join(process.cwd(), "public", "Company Profile Kwetjiwe.pdf")
    const pdfBuffer = fs.readFileSync(pdfPath)
    return pdfBuffer.toString("base64")
  } catch {
    return null
  }
}

export async function POST(req: Request) {
  if (!process.env.GOOGLE_GEMINI_API_KEY) {
    return NextResponse.json({ error: "Gemini API key is not configured." }, { status: 500 })
  }

  const body = await req.json().catch(() => ({}))
  const messages: ClientMessage[] = body.messages ?? []
  const pdfBase64 = loadCompanyProfileAsBase64()

  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }))

    contents.unshift({
      role: "user",
      parts: [
        { text: siteContext },
        pdfBase64
          ? {
              inlineData: {
                mimeType: "application/pdf",
                data: pdfBase64,
              },
            }
          : { text: "Company profile PDF not found on the server." },
      ],
    })

    const result = await model.generateContent({ contents })
    const reply = result.response?.text() ?? "I wasn't able to produce an answer."

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Gemini chat error:", error)
    return NextResponse.json({ error: "Unable to process your request right now." }, { status: 500 })
  }
}

import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "findhusters@gmail.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message } = body || {}

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const fullName = `${firstName} ${lastName}`
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER

    await transporter.sendMail({
      from: fromAddress,
      to: CONTACT_TO_EMAIL,
      subject: `New contact form submission from ${fullName}`,
      replyTo: email,
      text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
`,
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form submission failed:", error)
    return NextResponse.json({ error: "Unable to send message right now" }, { status: 500 })
  }
}

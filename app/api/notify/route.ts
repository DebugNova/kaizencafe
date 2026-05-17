import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

// Strict email regex is overkill — let the type=email input + Resend itself do the heavy lift
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type NotifyBody = {
  email?: string
  source?: string
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID

  if (!apiKey || !audienceId) {
    return NextResponse.json(
      { error: "Email signup is not configured yet." },
      { status: 503 }
    )
  }

  let body: NotifyBody
  try {
    body = (await req.json()) as NotifyBody
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const email = body.email?.trim().toLowerCase() ?? ""
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 }
    )
  }

  const source = body.source === "events" ? "Events" : "Opening"

  const resend = new Resend(apiKey)
  const { error } = await resend.contacts.create({
    email,
    audienceId,
    firstName: source,
    unsubscribed: false,
  })

  if (error) {
    // Treat "already exists" as success — they're already on the list
    const message = error.message?.toLowerCase() ?? ""
    if (message.includes("already exists") || message.includes("duplicate")) {
      return NextResponse.json({ ok: true, already: true })
    }
    console.error("Resend contacts.create failed", error)
    return NextResponse.json(
      { error: "Something went wrong. Try again in a moment." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}

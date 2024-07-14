import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.searchParams)

    const businessName = searchParams.get('name')
    const businessEmail = searchParams.get('email')
    const senderEmail = searchParams.get('sender')

    const formData = await req.formData()
    const feedbackMsg = formData.get('message') ?? ''
    const text = `You have received a new feedback!\n\n${feedbackMsg}`

    const { data, error } = await resend.emails.send({
      from: `${businessName} Feedback <${senderEmail}>`,
      to: [businessEmail ?? ''],
      subject: '[hreviews.studio] You have received a new feedback!',
      text: text,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}

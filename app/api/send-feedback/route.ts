import { EmailTemplate } from '@/app/_components/EmailTemplate'
import getConfig from 'next/config'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const {
  publicRuntimeConfig: { businessName, businessEmail, senderEmail },
} = getConfig()

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const feedbackMsg = formData.get('message')

    const { data, error } = await resend.emails.send({
      from: `${businessName} Feedback <${senderEmail}>`,
      to: [businessEmail],
      subject: `[${businessName} Feedback] You have a new feedback on your Reviews Funnel`,
      text: '',
      react: EmailTemplate({ feedback: feedbackMsg }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}

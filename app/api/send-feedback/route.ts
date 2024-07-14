// 'use client'

import { EmailTemplate } from '@/app/_components/EmailTemplate'
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
    const feedbackMsg = formData.get('message')

    const { data, error } = await resend.emails.send({
      from: `${businessName} Feedback <${senderEmail}>`,
      to: [businessEmail ?? ''],
      subject: `[${businessName} Feedback] You have a new feedback on your Reviews Funnel`,
      text: '',
      react: EmailTemplate({ text: feedbackMsg?.toString() ?? '' }),
    })

    if (error) {
      console.log(error)

      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}

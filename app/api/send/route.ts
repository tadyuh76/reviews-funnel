import { EmailTemplate } from '@/app/_components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'real <real@resend.dev>',
      to: ['huongdathuy76@gmail.com'],
      subject: 'Hello world',
      text: 'First Email',
      react: EmailTemplate({ firstName: 'Huy' }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}

import useStore from '../zustand/business-info'

interface EmailTemplateProps {
  text: FormDataEntryValue | null
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ text: feedback }) => {
  const { businessInfo } = useStore()

  return (
    <div>
      <h1>Hello {businessInfo?.businessOwnerFirstName ?? ''}!</h1>
      <p>You have a new feedback from {businessInfo?.reviewsURL ?? ''}:</p>
      <br />
      {feedback?.toString()}
    </div>
  )
}

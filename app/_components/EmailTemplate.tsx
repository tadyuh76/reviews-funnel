import getConfig from 'next/config'

interface EmailTemplateProps {
  text: FormDataEntryValue | null
}

const {
  publicRuntimeConfig: { businessOwnerFirstName, reviewsURL },
} = getConfig()

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ text: feedback }) => (
  <div>
    <h1>Hello {businessOwnerFirstName}!</h1>
    <p>You have a new feedback from {reviewsURL}:</p>
    <br />
    {feedback?.toString()}
  </div>
)

import getConfig from 'next/config'
import Image from 'next/image'
import Button from '../_components/Button'

const {
  publicRuntimeConfig: { websiteURL },
} = getConfig()

const ThankYou = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="bg-[var(--foreground-color)] py-10  rounded-2xl flex flex-col items-center w-1/2">
        <Image src={'/logo.png'} width={200} height={45} alt="logo" className="mb-10" />
        <h1 className="text-2xl mb-5">Thank you for your feedback!</h1>
        <p className="mb-10 text-[var(--grey)] text-center">
          We appreciate you taking the time to help us improve. <br />
          Our team will review your comments and work on making your experience better.
        </p>
        <Button text="Return to Homepage" href={websiteURL} />
      </div>
    </main>
  )
}

export default ThankYou

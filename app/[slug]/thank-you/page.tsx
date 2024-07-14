'use client'

import ErrorPage from '@/app/_components/ErrorPage'
import Logo from '@/app/_components/Logo'
import useStore from '@/app/zustand/business-info'
import Button from '../../_components/Button'

const ThankYou = () => {
  const { businessInfo } = useStore()

  return businessInfo ? (
    <main className="flex justify-center items-center h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="bg-[var(--foreground-color)] py-10  rounded-2xl flex flex-col items-center w-1/2">
        <Logo />
        <h1 className="text-2xl mb-5">Thank you for your feedback!</h1>
        <p className="mb-10 text-[var(--grey)] text-center">
          We appreciate you taking the time to help us improve. <br />
          Our team will review your comments and work on making your experience better.
        </p>
        <Button text="Return to Homepage" href={businessInfo.websiteURL} />
      </div>
    </main>
  ) : (
    <ErrorPage />
  )
}

export default ThankYou

'use client'

import ErrorPage from '@/app/_components/ErrorPage'
import Logo from '@/app/_components/Logo'
import useStore from '@/app/zustand/business-info'
import Button from '../../_components/Button'

const ThankYou = () => {
  const { businessInfo } = useStore()

  return businessInfo ? (
    <main className="flex justify-center items-center h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="bg-[var(--foreground-color)] py-10 px-4 md:px-10 rounded-2xl flex flex-col items-center justify-center  w-full h-full md:h-auto md:w-4/5 lg:w-2/3 xl:w-1/2">
        <Logo />
        <h1 className="text-2xl mb-5">Thank you for your feedback!</h1>
        <p className="text-[var(--grey)] text-center">
          We appreciate you taking the time to help us improve. Our team will review your comments
          and work on making your experience better.
        </p>
        <Button text="Return to Homepage" href={businessInfo.websiteURL} />
      </div>
    </main>
  ) : (
    <ErrorPage />
  )
}

export default ThankYou

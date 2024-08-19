'use client'

import ErrorPage from '@/app/_components/ErrorPage'
import Logo from '@/app/_components/Logo'
import useStore from '@/app/zustand/business-info'
import Link from 'next/link'
import FiveStarsSVG from '../../_components/svgs/FiveStarsSVG'
import GoogleSVG from '../../_components/svgs/GoogleSVG'

const Reviews = () => {
  const { businessInfo } = useStore()

  return businessInfo ? (
    <main className="flex justify-center items-center h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="bg-[var(--foreground-color)] py-10 px-4 md:px-10 rounded-2xl flex flex-col items-center justify-center w-full h-full md:h-auto md:w-4/5 lg:w-2/3 xl:w-1/2">
        <Logo />
        <h1 className="text-2xl mb-5">Your review would mean a lot to us!</h1>
        <p className="mb-10 text-[var(--grey)] text-center">
          Please click the button below to rate us on Google and help others learn more about our
          business. Thank you!
        </p>
        <Link
          href={businessInfo.googleReviewURL}
          className="flex items-center w-full max-w-[500px] h-[100px] flex p-0.5 bg-[var(--accent-color)] border-2 border-[var(--accent-color)] rounded-xl"
        >
          <div className="bg-[var(--foreground-color)] h-full aspect-square flex justify-center items-center rounded-lg">
            <GoogleSVG />
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 flex-1">
            <h1 className="text-xl text-[var(--foreground-color)] font-bold">Rate us on Google</h1>
            <FiveStarsSVG />
          </div>
        </Link>
      </div>
    </main>
  ) : (
    <ErrorPage />
  )
}

export default Reviews

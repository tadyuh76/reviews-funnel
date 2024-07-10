'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import BadEmojiSVG from './_components/svgs/BadEmojiSVG'
import GoodEmojiSVG from './_components/svgs/GoodEmojiSVG'

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex justify-center items-center h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="bg-[var(--foreground-color)] py-10 rounded-2xl flex flex-col items-center w-1/2">
        <Image src={'/logo.png'} width={200} height={45} alt="logo" className="mb-10" />
        <h1 className="text-2xl mb-5">How was your experience with us?</h1>
        <p className="mb-10 text-[var(--grey)] text-center">
          Your input is super important in helping us understand your needs better,
          <br /> so we can customize our services to suit you perfectly.
        </p>
        <div className="flex justify-center space-x-10">
          <div className="cursor-pointer w-60 h-60 border-2 border-[var(--light-grey)] hover:border-[var(--foreground)] rounded-3xl flex-col flex items-center justify-center mb-2">
            <BadEmojiSVG />
            <p className="mt-2 text-xl">Bad</p>
          </div>
          <div
            onClick={() => router.push('/reviews')}
            className="cursor-pointer w-60 h-60 border-2 border-[var(--light-grey)] hover:border-[var(--foreground)] rounded-3xl flex-col flex items-center justify-center mb-2"
          >
            <GoodEmojiSVG />
            <p className="mt-2 text-xl">Good</p>
          </div>
        </div>
      </div>
    </main>
  )
}

import Image from 'next/image'
import FiveStarsSVG from '../_components/svgs/FiveStarsSVG'
import GoogleSVG from '../_components/svgs/GoogleSVG'

const Reviews = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="bg-[var(--foreground-color)] py-10  rounded-2xl flex flex-col items-center w-1/2">
        <Image src={'/logo.png'} width={200} height={45} alt="logo" className="mb-10" />
        <h1 className="text-2xl mb-5">Your review would mean a lot to us!</h1>
        <p className="mb-10 text-[var(--grey)] text-center">
          Please click the button below to rate us on Google
          <br />
          and help others learn more about our business. Thank you!
        </p>
        <div className="cursor-pointer w-[500px] h-[100px] flex p-0.5 bg-[var(--accent-color)] border-2 border-[var(--accent-color)] rounded-xl">
          <div className="bg-[var(--foreground-color)] h-full aspect-square flex justify-center items-center rounded-lg">
            <GoogleSVG />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 flex-1">
            <h1 className="text-xl text-[var(--foreground-color)] font-bold">Rate us on Google</h1>
            <FiveStarsSVG />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Reviews

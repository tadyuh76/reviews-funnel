import Image from 'next/image'
import Button from '../_components/Button'

const Feedback = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="bg-[var(--foreground-color)] py-10  rounded-2xl flex flex-col items-center w-1/2">
        <Image src={'/logo.png'} width={200} height={45} alt="logo" className="mb-10" />
        <h1 className="text-2xl mb-5">{"We're sorry to hear about your experience"}</h1>
        <p className="mb-10 text-[var(--grey)] text-center">
          Your feedback is important to us, and we want to make things right.
          <br />
          Please let us know what went wrong so we can improve.
        </p>
        <textarea
          id="message"
          rows={6}
          className="resize-none px-5 py-2.5 w-4/5 bg-transparent rounded-lg placeholder-[var(--light-grey)] outline-none border border-[var(--light-grey)] focus:ring-[var(--black)] focus:border-[var(--black)] "
          placeholder="Please describe what went wrong with your experience..."
        />
        <Button text="Send Feedback" href="thank-you" />
      </div>
    </main>
  )
}

export default Feedback

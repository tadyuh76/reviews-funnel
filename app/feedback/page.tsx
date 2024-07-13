'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'

const Feedback = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget)

      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }
      // const data = await response.json()
    } catch (error) {
      setError('Failed to submit the data. Please try again.')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

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
        <form onSubmit={onSubmit} className="w-4/5">
          <textarea
            name="message"
            rows={6}
            className="w-full resize-none px-5 py-2.5 bg-transparent rounded-lg placeholder-[var(--light-grey)] outline-none border border-[var(--light-grey)] focus:ring-[var(--black)] focus:border-[var(--black)] "
            placeholder="Please describe what went wrong with your experience..."
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center w-4/5 h-[60px] bg-[var(--accent-color)] rounded-xl text-[var(--foreground-color)] font-bold mt-5"
          >
            {error ? error : isLoading ? 'Loading...' : 'Send Feedback'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default Feedback

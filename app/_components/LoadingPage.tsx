import Button from './Button'

function LoadingPage() {
  return (
    <main className=" h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="m-auto h-screen w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-8xl">404</h1>
        <h2 className="text-4xl text-[var(--grey)] my-4">Page not found.</h2>
        <Button href={'/'} text="Return to Homepage" />
      </div>
    </main>
  )
}

export default LoadingPage

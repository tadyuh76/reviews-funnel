function ErrorPage() {
  return (
    <main className=" h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="m-auto h-screen w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-4xl text-[var(--grey)] my-4">Loading...</h2>
      </div>
    </main>
  )
}

export default ErrorPage

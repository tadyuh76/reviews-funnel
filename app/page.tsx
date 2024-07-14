import Link from 'next/link'

export default function AppPage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <h1 className="text-3xl ">Reviews Funnel</h1>
      <br />
      <div>
        <h2>
          Created by{' '}
          <Link
            href={'https://linkedin.com/in/huongdathuy'}
            className="text-[var(--accent-color)] font-bold"
          >
            Huong Dat Huy
          </Link>
          .
        </h2>
      </div>
    </main>
  )
}

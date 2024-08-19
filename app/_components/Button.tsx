import { NextPage } from 'next'
import Link from 'next/link'

interface IButtonProps {
  text: string
  href: string
}

const Button: NextPage<IButtonProps> = ({ text, href }) => {
  return (
    <Link
      className="flex items-center justify-center w-full max-w-[500px] h-[60px] bg-[var(--accent-color)] rounded-xl text-[var(--foreground-color)] font-bold mt-5"
      href={href}
    >
      {text}
    </Link>
  )
}

export default Button

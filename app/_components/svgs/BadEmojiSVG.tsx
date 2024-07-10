import { SVGProps } from 'react'
const BadEmojiSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={144} height={144} fill="none" {...props}>
    <rect width={144} height={144} fill="#FADF7F" rx={72} />
    <path
      fill="#2F3B4A"
      d="M45 46a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM111 46a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
    />
    <path
      fill="#2F3B4A"
      fillRule="evenodd"
      d="M72 52c7.73 0 16.081 4.297 17.941 13.463.325 1.601-.728 3.159-2.353 3.479-1.625.32-3.205-.718-3.53-2.32-1.14-5.615-6.288-8.71-12.058-8.71s-10.918 3.095-12.058 8.71c-.325 1.602-1.905 2.64-3.53 2.32-1.624-.32-2.678-1.878-2.353-3.479C55.919 56.297 64.27 52 72 52Z"
      clipRule="evenodd"
    />
  </svg>
)
export default BadEmojiSVG

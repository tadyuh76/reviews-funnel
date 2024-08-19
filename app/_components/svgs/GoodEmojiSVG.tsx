import { SVGProps } from 'react'
const GoodEmojiSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={144} height={144} fill="none" {...props}>
    <circle cx={72} cy={72} r={72} fill="#FADF7F" />
    <path
      fill="#2F3B4A"
      d="M45 34a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM111 34a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
    />
    <mask
      id="a"
      width={60}
      height={27}
      x={42}
      y={46}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#2F3B4A"
        d="M72 48.035c-14.117.26-26.547-6.001-29.496 3C39.554 60.035 49.583 73 72 73c22.417 0 32.446-12.965 29.496-21.965-2.95-9-16.504-3.239-29.496-3Z"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#2F3B4A"
        d="M72 48.035c-14.117.26-26.547-6.001-29.496 3C39.554 60.035 49.583 73 72 73c22.417 0 32.446-12.965 29.496-21.965-2.95-9-16.504-3.239-29.496-3Z"
      />
      <path
        fill="#F7F8FA"
        d="M168-41c0 53.02-42.981 96-96 96-53.02 0-96-42.98-96-96s42.98-96 96-96c53.019 0 96 42.98 96 96Z"
      />
    </g>
  </svg>
)
export default GoodEmojiSVG


import { SVGProps } from "react"
const RunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="m14.587 18-1.76 1.76a4.973 4.973 0 0 0-9.654 0L1.413 18 0 19.413l2.293 2.294L2 22v2H0v2h2v.107c.102.651.286 1.287.547 1.893L0 30.587 1.413 32l2.2-2.2A5.747 5.747 0 0 0 8 32a5.746 5.746 0 0 0 4.387-2.2l2.2 2.2L16 30.587 13.453 28A7.851 7.851 0 0 0 14 26.067v-.134h2V24h-2v-2l-.293-.293L16 19.413 14.587 18zM8 18a3 3 0 0 1 3 3H5a3 3 0 0 1 3-3zm4 8a4.44 4.44 0 0 1-4 4 4.44 4.44 0 0 1-4-4v-3h8v3zm19.68-13.2v1.68L18 23.16V20.8l11.333-7.16L12 2.667V15.28a6.76 6.76 0 0 0-2-.96V.84L11.52 0l20.16 12.8z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default RunIcon

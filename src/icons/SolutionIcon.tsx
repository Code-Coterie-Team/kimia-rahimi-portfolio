import * as React from "react"
import { SVGProps } from "react"
const SolutionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#fb8c00" transform="translate(39.905 2.332) scale(.74832)">
      <path d="m-36.654 8.842 1.76-1.017 5.1 8.833-1.76 1.017zm-8.127 7.8 5.083-8.804 1.766 1.02-5.083 8.804z" />
      <rect width={10.166} height={8.5} x={-42.373} y={1.19} rx={1.35} />
      <rect width={10.166} height={8.5} x={-34.918} y={16.15} rx={1.35} />
      <rect width={10.166} height={8.5} x={-49.828} y={16.15} rx={1.35} />
    </g>
  </svg>
)
export default SolutionIcon
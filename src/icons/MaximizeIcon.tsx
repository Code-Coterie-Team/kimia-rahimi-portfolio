
import { SVGProps } from "react"
const MaximizeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="M3 5v9h9V5H3Zm8 8H4V6h7v7Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 5h1V4h7v7h-1v1h2V3H5v2Z"
      clipRule="evenodd"
    />
  </svg>
)
export default MaximizeIcon

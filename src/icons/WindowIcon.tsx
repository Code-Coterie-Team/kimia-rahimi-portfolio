import * as React from "react"
import { SVGProps } from "react"
const WindowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.5 1.25H3.75L2.5 2.5v13.75l1.25 1.25H17.5l1.25-1.25V2.5L17.5 1.25zm-7.5 15H3.75V2.5H10v13.75zm7.5 0h-6.25V2.5h6.25v13.75z"
    />
    <path fill="currentColor" d="M3.75 2.5H10v13.75H3.75z" />
  </svg>
)
export default WindowIcon

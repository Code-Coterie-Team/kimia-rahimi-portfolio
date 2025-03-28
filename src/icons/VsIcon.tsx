import * as React from "react"
import { SVGProps } from "react"
const VsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="#29b6f6"
    viewBox="0 0 48 48"
    {...props}
  >
    <path d="M44 11.11v25.78c0 1.27-.79 2.4-1.98 2.82l-8.82 4.14L34 33V15l-.8-10.85 8.82 4.14A2.98 2.98 0 0 1 44 11.11z" />
    <path
      fill="#0277bd"
      d="M9 33.896 34 15V5.353c0-1.198-1.482-1.758-2.275-.86L4.658 29.239a2 2 0 0 0 .107 3.032s1.324 1.232 1.803 1.574c.736.525 1.703.585 2.432.051z"
    />
    <path
      fill="#0288d1"
      d="M9 14.104 34 33v9.647c0 1.198-1.482 1.758-2.275.86L4.658 18.761a2 2 0 0 1 .107-3.032s1.324-1.232 1.803-1.574c.736-.525 1.703-.585 2.432-.051z"
    />
  </svg>
)
export default VsIcon

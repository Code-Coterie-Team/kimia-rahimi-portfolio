import * as React from "react"
import { SVGProps } from "react"
const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.675 1.125c1.8.112 3.487 1.012 4.725 2.25 1.462 1.575 2.25 3.487 2.25 5.737 0 1.8-.675 3.488-1.8 4.95-1.125 1.35-2.7 2.363-4.5 2.7-1.8.338-3.6.113-5.175-.787-1.575-.9-2.813-2.25-3.488-3.938-.675-1.687-.787-3.6-.225-5.287.563-1.8 1.575-3.263 3.15-4.275 1.463-1.013 3.263-1.463 5.063-1.35zm.562 14.512a6.91 6.91 0 0 0 3.825-2.362c.9-1.238 1.463-2.7 1.35-4.275 0-1.8-.675-3.6-1.912-4.838-1.125-1.125-2.475-1.8-4.05-1.912-1.463-.113-3.038.225-4.275 1.125a6.806 6.806 0 0 0-2.588 3.712c-.45 1.463-.45 3.038.225 4.5.675 1.463 1.688 2.588 3.038 3.376a6.03 6.03 0 0 0 4.387.675zm-1.35-7.2 2.7-2.812.788.787-2.7 2.813 2.7 2.813-.788.787-2.7-2.813-2.7 2.813-.787-.787 2.7-2.813-2.7-2.813.787-.787 2.7 2.812z"
      clipRule="evenodd"
    />
  </svg>
)
export default CrossIcon
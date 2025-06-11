import { Link } from "react-router-dom"


interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold">
        <span className="text-[#FF5722]">Get</span>
        <span className="text-black">Fork</span>
      </span>
    </Link>
  )
}

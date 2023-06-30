import { useState } from "react"

interface props {
  func: () => void
}

export default function Star({ func }: props ) {
  const [isMouseOver, setIsMouseOver] = useState(false)

  const handleMouseEnter = () => {
    setIsMouseOver(true)
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false)
  }

  return (
    <svg
      className="cursor-pointer"
      width="80"
      height="80"
      viewBox="0 0 100 100"
      onClick={func}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isMouseOver ? (
        <polygon points="50,0 63.4,30.9 98.1,35.3 71.6,58.1 79.4,93.1 50,74.5 20.6,93.1 28.4,58.1 1.9,35.3 36.6,30.9" fill="red"/>
      ) : (
      <polygon points="50,0 63.4,30.9 98.1,35.3 71.6,58.1 79.4,93.1 50,74.5 20.6,93.1 28.4,58.1 1.9,35.3 36.6,30.9" fill="yellow"/>
      )}
    </svg>
  )
}
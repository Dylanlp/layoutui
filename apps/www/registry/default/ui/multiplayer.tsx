import React, { useEffect, useRef, useState } from "react"

function getContrastColor(hexColor: string): string {
  // Remove the # if it's there
  hexColor = hexColor.replace("#", "")

  // Convert hex to RGB
  const r = parseInt(hexColor.substr(0, 2), 16)
  const g = parseInt(hexColor.substr(2, 2), 16)
  const b = parseInt(hexColor.substr(4, 2), 16)

  // Calculate brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  // Return black only if it's quite a light color (higher threshold)
  return brightness > 180 ? "#000000" : "#FFFFFF"
}

type CursorVariant = "default" | "outline"

const MultiplayerCursor = ({
  name: initialName = "John Smith",
  color = "#FFD700",
  style = {},
  variant = "default" as CursorVariant,
}) => {
  const [name, setName] = useState(initialName)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const targetRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef<number>()

  const [initialPosition] = useState(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  }))

  const [moveInterval] = useState(() => 1500 + Math.random() * 1000) // Random interval between 1.5 and 2.5 seconds

  useEffect(() => {
    // Set initial position
    setPosition(initialPosition)
    targetRef.current = initialPosition

    const updatePosition = () => {
      setPosition((prevPos) => {
        const newX = prevPos.x + (targetRef.current.x - prevPos.x) * 0.1
        const newY = prevPos.y + (targetRef.current.y - prevPos.y) * 0.1
        return { x: newX, y: newY }
      })
      frameRef.current = requestAnimationFrame(updatePosition)
    }

    frameRef.current = requestAnimationFrame(updatePosition)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [initialPosition])

  useEffect(() => {
    const moveRandomly = () => {
      const randomX = Math.random() * 20 - 10 // Move ±10% from initial position
      const randomY = Math.random() * 20 - 10 // Move ±10% from initial position
      targetRef.current = {
        x: initialPosition.x + randomX,
        y: initialPosition.y + randomY,
      }
      setTimeout(moveRandomly, moveInterval)
    }

    const initialDelay = Math.random() * 1000 // Random initial delay up to 1 second
    const timeoutId = setTimeout(moveRandomly, initialDelay)

    return () => clearTimeout(timeoutId)
  }, [initialPosition, moveInterval])

  useEffect(() => {
    setName(initialName)
  }, [initialName])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const textColor = getContrastColor(color)

  const cursorSvg =
    variant === "default" ? (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 3L19 12L12 13L8 21L5 3Z"
          fill={color}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          rx="2"
        />
      </svg>
    ) : (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="5" fill={color} />
      </svg>
    )

  const pillStyle =
    variant === "default"
      ? { backgroundColor: color, color: textColor, marginLeft: "18px" }
      : {
          backgroundColor: color,
          color: textColor,

          borderRadius: "200px",
          marginLeft: "10px",
        }

  return (
    <div
      className={`pointer-events-auto absolute transition-transform duration-300 ease-out ${
        isHovered ? "animate-cursor-hover" : ""
      }`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="drop-shadow-md">{cursorSvg}</div>
      <div
        className="ml-2 inline-flex items-center overflow-hidden whitespace-nowrap rounded-md px-2 py-1 text-xs drop-shadow-md"
        style={pillStyle}
      >
        <p className="text-xs">{name}</p>
      </div>
    </div>
  )
}

export default MultiplayerCursor

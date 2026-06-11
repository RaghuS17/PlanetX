import { useEffect, useState, useRef } from 'react'

// Custom hook: typewriter effect
export function useTypewriter(text, speed = 90) {
  const [output, setOutput] = useState('')
  const indexRef = useRef(0)

  useEffect(() => {
    indexRef.current = 0
    setOutput('')
    const tick = () => {
      if (indexRef.current < text.length) {
        setOutput((prev) => prev + text.charAt(indexRef.current))
        indexRef.current++
        setTimeout(tick, speed + Math.random() * 30)
      }
    }
    tick()
  }, [text, speed])

  return output
}

// Custom hook: live countdown
export function useCountdown(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds)
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s <= 0 ? initialSeconds : s - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [initialSeconds])
  const m = Math.floor(seconds / 60).toString().padStart(2, '0')
  const s = (seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

// Custom hook: count up on view
export function useCountUp(target, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const animate = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              const v = target * eased
              setValue(decimals > 0 ? parseFloat(v.toFixed(decimals)) : Math.floor(v))
              if (progress < 1) requestAnimationFrame(animate)
              else setValue(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration, decimals])

  return [ref, decimals > 0 ? value.toFixed(decimals) : value]
}

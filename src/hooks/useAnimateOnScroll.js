import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const useAnimateOnScroll = (threshold = 0.1) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return [ref, controls]
} 
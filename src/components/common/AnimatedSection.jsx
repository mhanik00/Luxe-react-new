import { motion } from 'framer-motion'
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll'

const AnimatedSection = ({ 
  children, 
  variants, 
  className = '', 
  threshold = 0.1 
}) => {
  const [ref, controls] = useAnimateOnScroll(threshold)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection 
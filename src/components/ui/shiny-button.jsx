import { motion } from "framer-motion"


const ShinyButton = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      className={` ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Animated shine effect */}
      <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      {/* Content */}
      <div className="relative flex items-center space-x-2">
        {children}
      </div>
    </motion.div>
  )
}

export default ShinyButton
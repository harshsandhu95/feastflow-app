"use client"

import { MotionConfig, motion } from "motion/react"

export function MotionProvider({ children }: React.PropsWithChildren) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.2,
        ease: "easeInOut"
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}

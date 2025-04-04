import { MotionConfig } from "motion/react";

export function MotionProvider({ children }: React.PropsWithChildren) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.2,
        ease: "easeInOut"
      }}
    >
      {children}
    </MotionConfig>
  )
}

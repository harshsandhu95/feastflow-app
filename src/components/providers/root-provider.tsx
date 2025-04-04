import { AuthProvider } from "./auth-provider";
import { MotionProvider } from "./motion-provider";
import { ThemeProvider } from "./theme-provider";

export default function RootProvider({ children }: React.PropsWithChildren) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <MotionProvider>
          {children}
        </MotionProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

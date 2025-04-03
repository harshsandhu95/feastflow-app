import { AuthProvider } from "./auth-provider";
import { ThemeProvider } from "./theme-provider";

export default function RootProvider({ children }: React.PropsWithChildren) {
  return (
    <AuthProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AuthProvider>
  )
}

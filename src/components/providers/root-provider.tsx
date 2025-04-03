import { ThemeProvider } from "./theme-provider";

export default function RootProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

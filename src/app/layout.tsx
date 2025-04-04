import type { Metadata } from "next";
import RootProvider from "@/components/providers/root-provider";
import { Toaster } from "@/components/ui/sonner";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

type Props = React.PropsWithChildren

export default function RootLayout({
  children,
}: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable)}>
        <RootProvider>
          {children}
          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}

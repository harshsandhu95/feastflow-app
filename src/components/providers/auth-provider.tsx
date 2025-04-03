"use client";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

export function AuthProvider({ children }: React.PropsWithChildren) {
  return (
    <ClerkProvider
      afterSignOutUrl="/sign-in"
      signInUrl="/sign-in"
    >
      {children}
    </ClerkProvider>
  )
}

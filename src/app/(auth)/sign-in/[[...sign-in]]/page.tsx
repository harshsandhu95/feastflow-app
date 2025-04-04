import Link from "next/link";
import { ArrowLeftIcon, GalleryVerticalEndIcon } from "lucide-react";
import { LoginForm } from "@/app/(auth)/sign-in/_components/login-form";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 self-center font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEndIcon className="size-4" />
            </div>
            FeastFlow
          </Link>

          <Button asChild variant="ghost">
            <Link href="/">
              <ArrowLeftIcon />
              Home
            </Link>
          </Button>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

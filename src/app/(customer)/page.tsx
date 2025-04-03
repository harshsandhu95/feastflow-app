import Link from "next/link";
import { GalleryVerticalEndIcon, ShieldCheckIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomerForm } from "@/components/customer-form";

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEndIcon className="size-4" />
          </div>
          FeastFlow
        </Link>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Welcome</CardTitle>
            <CardDescription>
              Let&apos;s take your order
            </CardDescription>
          </CardHeader>

          <CardContent>
            <CustomerForm />
          </CardContent>

          <CardFooter className="flex items-center justify-center gap-2 text-muted-foreground border-t border-muted">
            <ShieldCheckIcon className="size-4" />
            <p className="text-sm font-medium">
              Your data is safe with us
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

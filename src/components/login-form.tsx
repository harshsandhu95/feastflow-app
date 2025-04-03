"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your username and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignIn.Root>
            <SignIn.Step name="start" className="grid gap-6">
              <div className="grid gap-6">
                <Clerk.GlobalError className="block text-sm text-destructive" />
                <Clerk.Field name="identifier" className="grid gap-2">
                  <Clerk.Label htmlFor="username">Username</Clerk.Label>
                  <Clerk.Input asChild>
                    <Input
                      id="username"
                      type="text"
                      required
                    />
                  </Clerk.Input>
                  <Clerk.FieldError className="ml-3 block text-xs text-destructive" />
                </Clerk.Field>
                <Clerk.Field name="password" className="grid gap-2">
                  <div className="flex items-center">
                    <Clerk.Label htmlFor="password">Password</Clerk.Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Clerk.Input asChild>
                    <Input id="password" type="password" required />
                  </Clerk.Input>
                  <Clerk.FieldError className="ml-3 block text-xs text-destructive" />
                </Clerk.Field>
                <Clerk.Loading>
                  {(isLoading) => (
                    <SignIn.Action submit disabled={isLoading} className={cn(buttonVariants(), "w-full")}>
                      {isLoading && <Loader2 className="animate-spin" />}
                      Login
                    </SignIn.Action>
                  )}
                </Clerk.Loading>
              </div>
            </SignIn.Step>
          </SignIn.Root>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
};

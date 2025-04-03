"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ArrowRightIcon, Loader2, ShieldCheckIcon } from "lucide-react"
import { motion } from "motion/react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const formSchema = z.object({
  phone_number: z.string().min(10, { message: "Please enter a correct phone number" }),
  name: z.string().min(2, { message: "Please enter a correct name" }),
})

interface Props {
  loginCustomer: ({ name, phone_number }: { name: string; phone_number: string; }) => Promise<{
    success: boolean;
    data: {
      name: string;
      phone_number: string;
    } | null;
    exists?: boolean;
}>
}

export function CustomerForm({ loginCustomer }: Props) {
  const router = useRouter()

  const [loading, setLoading] = React.useState(false);
  const [customer, setCustomer] = React.useState<{
    name: string;
    phone_number: string;
  } | null>(null)
  const [exists, setExists] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone_number: "",
      name: "",
    },
    reValidateMode: "onChange",
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)

    const { name, phone_number } = values
    const { success, data, exists } = await loginCustomer({ name, phone_number })

    if (success) {
      setCustomer(data)
      if (exists) setExists(true)
    }

    setLoading(false)
  }

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (customer) {
      timeoutId = setTimeout(() => router.push(`/menu?phone_number=${customer.phone_number}`), 1500)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [customer, router])

  return customer ? (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card className="min-h-64 items-center justify-center">
        <h1 className="text-xl font-semibold">Welcome {exists && "back"} {customer.name}</h1>
      </Card>
    </motion.div>
  ) : (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome</CardTitle>
          <CardDescription>
            Let&apos;s take your order
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 place-items-stretch gap-y-2">
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="(+91) 123 456 7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={loading} className="mt-4">
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <ArrowRightIcon />
                )}
                Continue
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex items-center justify-center gap-2 text-muted-foreground border-t border-muted">
          <ShieldCheckIcon className="size-4" />
          <p className="text-sm font-medium">
            Your data is safe with us
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

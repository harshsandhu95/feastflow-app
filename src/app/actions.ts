"use server"

import { createClient } from "@/lib/db";

interface LoginCustomer {
  name: string
  phone_number: string
}

export async function loginCustomer({ name, phone_number }: LoginCustomer) {
  const db = await createClient()

  const { data: customers } = await db.from("customers").select("name, phone_number").eq("phone_number", phone_number)

  if (customers && customers.length > 0) return { success: true, data: customers[0], exists: true }
  else {
    const { data } = await db.from("customers").insert([
      { name, phone_number }
    ]).select("name, phone_number")

    if (data && data.length > 0) return { success: true, data: data[0] }
  }

  return { success: false, data: null }
}

"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CopyIcon, MoreVerticalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTableColumnHeader } from "@/components/data-table/column-header"

export type Order = {
  id: string
  customer_name: string
  customer_phone_number: string
  status: string
  items_count: number
  amount: number
}

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Order Number" />,
  },
  {
    accessorKey: "customer_name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Customer Name" />,
  },
  {
    accessorKey: "customer_phone_number",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Phone Number" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
  },
  {
    accessorKey: "items_count",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Items" />,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" className="justify-end" />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original

      return (
        <div className="w-full flex items-center justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVerticalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(order.id)}
                className="flex items-center justify-between gap-x-2"
              >
                Copy Order ID
                <CopyIcon className="size-3" />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Order</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]

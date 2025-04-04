"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  ChartPieIcon,
  LifeBuoyIcon,
  Package2Icon,
  SendIcon,
  UsersIcon,
} from "lucide-react"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavSecondary } from "@/components/dashboard/nav-secondary"
import { NavUser } from "@/components/dashboard/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

  const data = {
    navMain: [
      {
        title: "Statistics",
        url: "/dashboard/statistics",
        icon: ChartPieIcon,
      },
      {
        title: "Orders",
        url: "/dashboard/orders",
        icon: Package2Icon,
        items: [
          {
            title: "Completed",
            url: "/dashboard/orders?status=completed",
          },
          {
            title: "Pending",
            url: "/dashboard/orders?status=pending",
          },
          {
            title: "Cancelled",
            url: "/dashboard/orders?status=cancelled",
          },
        ],
      },
      {
        title: "Staff",
        url: "/dashboard/staff",
        icon: UsersIcon,
        items: [
          {
            title: "Managers",
            url: "/dashboard/staff?role=manager",
          },
          {
            title: "Host",
            url: "/dashboard/staff?role=host",
          },
          {
            title: "Chef",
            url: "/dashboard/staff?role=chef",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "#",
        icon: LifeBuoyIcon,
      },
      {
        title: "Feedback",
        url: "#",
        icon: SendIcon,
      },
    ],
  };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">FeastFlow</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}

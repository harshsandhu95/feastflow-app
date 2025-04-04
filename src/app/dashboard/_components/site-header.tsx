"use client"

import { useOrganization } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { getRole } from "@/lib/utils";
import { Notifications } from "./notifications"

export function SiteHeader() {
  const { organization, membership } = useOrganization();

  const org = {
    name: organization?.name,
    role_slug: membership?.role,
    role: getRole(membership?.role),
  };

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Notifications />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="flex items-center gap-4">
          <h1 className="text-base font-medium">{org?.name}</h1>
          <Badge>{org?.role}</Badge>
        </div>
      </div>
    </header>
  )
}

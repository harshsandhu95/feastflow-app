import { AppSidebar } from "@/app/dashboard/_components/app-sidebar";
import { SiteHeader } from "@/app/dashboard/_components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashbaordLayout({
  children,
} : React.PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

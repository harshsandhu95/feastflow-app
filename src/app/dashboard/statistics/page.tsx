import { FileUpIcon } from "lucide-react";
import { OrdersChart } from "@/app/dashboard/statistics/_charts/orders";
import { RevenueChart } from "@/app/dashboard/statistics/_charts/revenue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { createMockMonthlyOrderData } from "@/lib/mocks/mockOrderStatistics";
import { createMockMonthlyRevenueData } from "@/lib/mocks/mockRevenueReport";
import { OrderStatistics, RevenueReport } from "@/types";

export default function Page() {
  const orderStatistics: OrderStatistics[] = createMockMonthlyOrderData();
  const revenueReport: RevenueReport[] = createMockMonthlyRevenueData();

  return (
    <main className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="@5xl/main:grid-cols-2 grid grid-cols-1 gap-4 p-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Statistics</CardTitle>
              <CardDescription>Orders from last 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <OrdersChart data={orderStatistics} />
            </CardContent>
            <CardFooter className="items-start gap-1">
              <Button variant="ghost" size="sm">
                <FileUpIcon />
                Export
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Statistics</CardTitle>
              <CardDescription>Revenue in last 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <RevenueChart data={revenueReport} />
            </CardContent>
            <CardFooter className="items-start gap-1">
              <Button variant="ghost" size="sm">
                <FileUpIcon />
                Export
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

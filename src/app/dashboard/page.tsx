import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DataTable } from "@/components/data-table"
import { createMockOrders } from "@/lib/mocks/mockOrders"
import { createMockDashboardCards } from "@/lib/mocks/mockDashboardCards"
import { DashboardData, MockOrder } from "@/types"
import { columns } from "./columns"

export default function Page() {
  const cards: DashboardData = createMockDashboardCards()
  const data: MockOrder[] = createMockOrders(20)

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          {/* Cards */}
          <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
            {Object.keys(cards).map((key) => {
              const dataItem = cards[key as keyof DashboardData];
              const TrendIcon = dataItem.trendUp ? TrendingUpIcon : dataItem.trendDown ? TrendingDownIcon : null;
              const badgeColor = dataItem.trendUp ? 'outline' : dataItem.trendDown ? 'outline' : undefined;
              const changeFormatted = `${dataItem.changePrefix || '+'}${Math.abs(dataItem.change)}${dataItem.changeSuffix || ''}`;
              console.log(dataItem.title)

              return (
                <Card key={key} className="@container/card">
                  <CardHeader className="relative">
                    <CardDescription>{dataItem.title}</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                      {dataItem.value}
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                      {TrendIcon && (
                        <Badge variant={badgeColor} className="flex gap-1 rounded-lg text-xs">
                          <TrendIcon className="size-3" />
                          {changeFormatted}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      {dataItem.trendText} {TrendIcon && <TrendIcon className="size-4" />}
                    </div>
                    {dataItem.secondaryText && (
                      <div className="text-muted-foreground">{dataItem.secondaryText}</div>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <div className="px-4 lg:px-6">
            <DataTable
              data={data}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

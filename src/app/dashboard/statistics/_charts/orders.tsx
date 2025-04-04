"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { OrderStatistics } from "@/types"

const config = {
  completed: {
    label: "Completed",
    color: "var(--chart-1)",
  },
  pending: {
    label: "Pending",
    color: "var(--chart-2)",
  },
  cancelled: {
    label: "Cancelled",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

interface OrdersChartProps {
  data: OrderStatistics[]
}

export function OrdersChart({ data }: OrdersChartProps) {
  return (
    <ChartContainer
      config={config}
      className="w-full"
    >
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {Object.keys(config).map(key => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            strokeWidth={2}
            dot={true}
            activeDot={{ r: 8 }}
            stroke={config[key as keyof typeof config].color}
            radius={8}
          />
        ))}
      </LineChart>
    </ChartContainer>
  )
}

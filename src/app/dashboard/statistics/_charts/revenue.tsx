"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { RevenueReport } from "@/types"

const config = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

interface RevenueChartProps {
  data: RevenueReport[]
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <ChartContainer
      config={config}
      className="w-full"
    >
      <AreaChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          dataKey="revenue"
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {Object.keys(config).map(key => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            strokeWidth={2}
            dot={true}
            activeDot={{ r: 8 }}
            stroke={config[key as keyof typeof config].color}
            fill={config[key as keyof typeof config].color}
          />
        ))}
      </AreaChart>
    </ChartContainer>
  )
}

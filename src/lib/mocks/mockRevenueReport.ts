import { faker } from "@faker-js/faker";
import { RevenueReport } from "@/types";

export function createMockMonthlyRevenueData(): RevenueReport[] {
  const last12MonthsRevenue: RevenueReport[] = [];
  const currentDate = new Date();

  for (let i = 0; i < 12; i++) {

    // Generate a base revenue with some upward trend
    const baseRevenue = 5000 + i * 300;
    // Add some random variation to the revenue
    const revenue = parseFloat(faker.commerce.price({ min: baseRevenue - 1000, max: baseRevenue + 1500, dec: 2 }));

    const monthName = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(currentDate);

    last12MonthsRevenue.unshift({
      month: monthName,
      revenue,
    });

    // Go to the previous month
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  return last12MonthsRevenue;
}

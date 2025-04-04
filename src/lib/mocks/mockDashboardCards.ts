import { faker } from '@faker-js/faker';

export function createMockDashboardCards() {
  const totalRevenueValue = parseFloat(faker.commerce.price({ min: 1000, max: 5000, dec: 2 }));
  const revenueChangePercentage = parseFloat((Math.random() * 30 - 15).toFixed(1));
  const newCustomersValue = faker.number.int({ min: 500, max: 2000 });
  const newCustomersChangePercentage = parseFloat((Math.random() * 40 - 20).toFixed(0));
  const returningCustomersValue = faker.number.int({ min: 50, max: 500 });
  const returningCustomersChangePercentage = parseFloat((Math.random() * 30 - 10).toFixed(1));
  const totalOrdersValue = faker.number.int({ min: 100, max: 500 });
  const totalOrdersChange = faker.number.int({ min: -50, max: 150 });

  return {
    totalRevenue: {
      title: 'Total Revenue',
      value: `$${totalRevenueValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: revenueChangePercentage,
      trendUp: revenueChangePercentage >= 0,
      trendText: revenueChangePercentage >= 0 ? 'Trending up this month' : 'Trending down this month',
      secondaryText: 'Visitors for the last 6 months',
      changeSuffix: '%',
    },
    newCustomers: {
      title: 'New Customers',
      value: newCustomersValue.toLocaleString(),
      change: newCustomersChangePercentage,
      trendDown: newCustomersChangePercentage < 0,
      trendText: `Down ${Math.abs(newCustomersChangePercentage)}% this period`,
      secondaryText: 'Acquisition needs attention',
      changeSuffix: '%',
    },
    returningCustomers: {
      title: 'Returning Customers',
      value: returningCustomersValue.toLocaleString(),
      change: returningCustomersChangePercentage,
      trendUp: returningCustomersChangePercentage >= 0,
      trendText: 'Strong user retention',
      secondaryText: 'Engagement exceed targets',
      changeSuffix: '%',
    },
    totalOrders: {
      title: 'Total Orders',
      value: totalOrdersValue.toLocaleString(),
      change: totalOrdersChange,
      trendUp: true,
      trendText: 'Steady performance',
      secondaryText: 'Meets growth projections',
      changeSuffix: '',
      changePrefix: '+',
    },
  };
}

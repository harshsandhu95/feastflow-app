import { faker } from '@faker-js/faker';
import { OrderStatistics } from '@/types';

export function createMockMonthlyOrderData(): OrderStatistics[] {
  const last12Months: OrderStatistics[] = [];
  const currentDate = new Date();

  for (let i = 0; i < 12; i++) {
    const completed = faker.number.int({ min: 40 + i * 2, max: 180 + i * 5 }); // Simulate some growth
    const pending = faker.number.int({ min: 8, max: 40 });
    const cancelled = faker.number.int({ min: 3, max: 25 });
    const total = completed + pending + cancelled;

    const monthName = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(currentDate);

    last12Months.unshift({ // Add to the beginning to have the latest month first
      month: monthName,
      completed,
      pending,
      cancelled,
      total,
    });

    // Go to the previous month
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  return last12Months;
}

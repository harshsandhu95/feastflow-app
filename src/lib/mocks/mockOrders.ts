import { MockOrder } from '@/types';
import { faker } from '@faker-js/faker'

export function createMockOrders(count = 5): MockOrder[] {
  const mockOrders = [];
  for (let i = 0; i < count; i++) {
    const customerName = faker.person.fullName();
    const phoneNumber = `+91 ${faker.phone.number({ style: "national" })}`;
    const statusOptions = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];
    const status = faker.helpers.arrayElement(statusOptions);
    const itemsCount = faker.number.int({ min: 1, max: 10 });
    const amount = parseFloat(faker.commerce.price({ min: 10, max: 500, dec: 2 }));

    mockOrders.push({
      id: faker.string.numeric(4),
      customer_name: customerName,
      customer_phone_number: phoneNumber,
      status: status,
      items_count: itemsCount,
      amount: amount,
    });
  }
  return mockOrders;
}

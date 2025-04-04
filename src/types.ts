export interface MockOrder {
  id: string;
  customer_name: string;
  customer_phone_number: string;
  status: string;
  items_count: number;
  amount: number;
}

export type DashboardCardData = {
  title: string;
  value: string;
  change: number;
  trendUp?: boolean;
  trendDown?: boolean;
  trendText: string;
  secondaryText?: string;
  changeSuffix?: string;
  changePrefix?: string;
};

export type DashboardData = {
  totalRevenue: DashboardCardData;
  newCustomers: DashboardCardData;
  returningCustomers: DashboardCardData;
  totalOrders: DashboardCardData;
};

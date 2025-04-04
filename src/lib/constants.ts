import React from "react";
import { ChartSplineIcon, CircleDollarSignIcon, ClipboardCheckIcon, LucideProps, PackageIcon, PencilIcon, ShoppingCartIcon, SquareMenuIcon, ZoomInIcon } from "lucide-react";

export const APP_NAME = "FeastFlow";
export const APP_TITLE = "FeastFlow - The Future of Food Court Ordering is Here"
export const APP_DESCRIPTION = "Say goodbye to multiple queues! Order from all your favorite food court spots with one seamless app.";

interface Feature {
  name: string;
  description: string;
  icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
};

export const CUSTOMER_FEATURES: Feature[] = [
  {
    name: "Explore All Food Court Options",
    description: "Easily browse menus and discover new dishes from all your favorite food court restaurants.",
    icon: ZoomInIcon,
  },
  {
    name: "Order from Multiple Restaurants, One Cart",
    description: "Add items from different restaurants to a single order for a hassle-free checkout.",
    icon: ShoppingCartIcon,
  },
  {
    name: "Customize Your Meal",
    description: "Easily add modifications, special instructions, and customize your order to your liking.",
    icon: PencilIcon,
  },
  {
    name: "Secure Payments & Real-time Order Updates",
    description: "Enjoy secure payment options and track your order status from preparation to ready for pickup/delivery.",
    icon: CircleDollarSignIcon,
  },
];

export const RESTAURANT_FEATURES: Feature[] = [
  {
    name: "Efficiently Manage Incoming Orders",
    description: "Receive, accept/reject, and update the status of orders with an intuitive dashboard.",
    icon: ClipboardCheckIcon,
  },
  {
    name: "Update Your Menu with Ease",
    description: "Add, edit, and remove menu items, categories, and pricing quickly and easily.",
    icon: SquareMenuIcon,
  },
  {
    name: "Keep Track of Your Inventory",
    description: "Monitor ingredient stock levels to prevent shortages and optimize your supplies.",
    icon: PackageIcon,
  },
  {
    name: "Gain Insights into Your Performance",
    description: "Access sales data and analytics to understand popular items and optimize your offerings.",
    icon: ChartSplineIcon,
  },
];

import { createContext, useMemo } from "react";
import useFetchData from "../utils/hooks/useFetchdata";

export const DashboardContext = createContext();

export default function DashBoardContextProvider({ children }) {
  const { data: ordersData } = useFetchData(`orders/all`);
  const { data: customerData } = useFetchData(`user/all`);
  const { data: productData } = useFetchData(`products`);

  const totalSales = useMemo(() => {
    return ordersData
      .flatMap((user) => user.orders)
      .filter((order) => order.status === "completed")
      .flatMap((order) => order.order_items)
      .reduce((acc, item) => acc + item.subtotal, 0);
  }, [ordersData]);

  const totalOrders = useMemo(() => {
    return ordersData
      .flatMap((user) => user.orders)
      .flatMap((order) => order.order_items);
  }, [ordersData]);

  const totalCustomers = useMemo(() => {
    return customerData;
  }, [customerData]);

  const totalProducts = useMemo(() => {
    return productData;
  }, [productData]);

  const value = {
    totalSales,
    totalOrders,
    totalCustomers,
    totalProducts,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

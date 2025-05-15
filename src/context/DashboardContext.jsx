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
      .reduce((acc, item) => acc + item.subtotal, 0) || 0;
  }, [ordersData]);

  const allOrders = useMemo(() => {
    return ordersData
      .flatMap((user) => user.orders)
      .flatMap((order) => order.order_items) || [];
  }, [ordersData]);

  const allCustomers = useMemo(() => {
    return customerData || [];
  }, [customerData]);

  const allProducts = useMemo(() => {
    return productData || 0;
  }, [productData]);

  const value = {
    ordersData,
    totalSales,
    allOrders,
    allCustomers,
    allProducts,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

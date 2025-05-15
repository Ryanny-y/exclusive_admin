import SummaryCard from "./SummaryCard";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { LuPackageCheck } from "react-icons/lu";
import { FaRegClipboard } from "react-icons/fa";
import { useEffect, useMemo } from "react";
import useFetchData from "../../../utils/hooks/useFetchdata";

const Summaries = () => {
  const {
    data: ordersData,
    loading: ordersLoading,
    error: ordersError,
  } = useFetchData(`orders/all`);
  const {
    data: customerData,
    loading: customerLoading,
    error: customerError,
  } = useFetchData(`user/all`);
  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useFetchData(`products`);

  const totalSales = useMemo(() => {
    return ordersData
    .flatMap(user => user.orders)
    .filter(order => order.status === "completed")
    .flatMap(order => order.order_items)
    .reduce((acc, item) => acc + item.subtotal, 0);
  }, [ordersData, ordersLoading, ordersError]);

  const totalOrders = useMemo(() => {
    return ordersData
    .flatMap(user => user.orders)
    .flatMap(order => order.order_items);
  }, [ordersData, ordersLoading, ordersError]);

  const totalCustomers = useMemo(() => {
    return customerData;
  }, [customerData, customerLoading, customerError]);

  const totalProducts = useMemo(() => {
    return productData;
  }, [productData, productLoading, productError]);

  return (
    <section
      id="card_summaries"
      className="grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      <SummaryCard
        title="Total Sales"
        value={totalSales}
        icon={<IoAnalyticsOutline strokeWidth={2} />}
      />
      <SummaryCard
        title="Total Orders"
        value={totalOrders.length}
        icon={<FaRegClipboard strokeWidth={2} />}
      />
      <SummaryCard
        title="Total Customers"
        value={totalCustomers.length}
        icon={<BsPeople />}
      />
      <SummaryCard
        title="Total Products"
        value={totalProducts.length}
        icon={<LuPackageCheck strokeWidth={2} />}
      />
    </section>
  );
};

export default Summaries;

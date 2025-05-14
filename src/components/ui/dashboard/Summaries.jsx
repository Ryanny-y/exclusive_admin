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

  // const totalOrders = useMemo(() => {
  //   const oneOrder = ordersData.map(order => order.orders);
  //   console.log(oneOrder);

  // }, []);

  console.log(ordersData);
  
  const oneOrder = ordersData.map((order) => order.orders);
  

  useEffect(() => {
    const oneOrder = ordersData.map((order) => order.orders);
    console.log(oneOrder.length);

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
        value={123}
        icon={<IoAnalyticsOutline strokeWidth={2} />}
      />
      <SummaryCard
        title="Total Orders"
        value={13}
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

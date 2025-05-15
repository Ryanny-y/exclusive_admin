import dayjs from "dayjs";
import { useMemo } from "react";
import { useContext } from "react";
import { DashboardContext } from '../../../context/DashboardContext';

const NewCardsContainer = () => {
  const today = dayjs();

  const { totalOrders, totalCustomers } = useContext(DashboardContext);

  const newCustomers = useMemo(() => {
    return totalCustomers.filter((customer) => {
      const { created_at } = customer;
      const newCustomers = today.isSame(dayjs(created_at), "day");
      return newCustomers;
    });
  }, [totalCustomers]);

  const newOrders = useMemo(() => {
    return totalOrders
      .flatMap((user) => user?.orders)
      .filter((order) => {
        const order_date = order?.order_date;
        const newOrders = today.isSame(dayjs(order_date), "day");
        return newOrders;
      });
  }, [totalOrders]);

  const newCustomerPercent = useMemo(() => {
    const newCustomersLength = newCustomers.length;
    const customersLength = totalCustomers.length;

    const percent = (newCustomersLength / customersLength) * 100;
    return percent >= 0 ? percent : 0;
  }, [newCustomers, totalCustomers])

  const newOrdersPercent = useMemo(() => {
    const newOrdersLength = newOrders.length;
    const ordersDataLength = totalOrders.flatMap(user => user?.orders).flatMap(orders => orders?.order_items).length;
    
    const percent = (newOrdersLength / ordersDataLength) * 100;
    return percent >= 0 ? percent : 0;
  }, [newOrders, totalOrders]);

  return (
    <div className="flex flex-col xs:flex-row md:flex-col justify-between gap-5">
      <div className="dark:bg-dark-100 py-7 px-5 md:pl-8 md:pr-10 rounded-md shadow-md dark:shadow-gray-300 flex-1">
        <h6 className="mb-2">New Customers</h6>

        <div className="flex items-center gap-4">
          <p className="text-5xl font-bold">{newCustomers.length}</p>
          <p className="text-sm dark:text-green-300 dark:bg-green-500/40 py-0.5 px-3 rounded-md">
            +{newCustomerPercent}%
          </p>
        </div>
      </div>

      <div className="dark:bg-dark-100 py-7 px-5 md:pl-8 md:pr-10 rounded-md shadow-md dark:shadow-gray-300 flex-1">
        <h6 className="mb-2">New Orders</h6>

        <div className="flex items-center gap-4">
          <p className="text-5xl font-bold">{newOrders.length}</p>
          <p className="text-sm dark:text-green-300 dark:bg-green-500/40 py-0.5 px-3 rounded-md">
            +{newOrdersPercent}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewCardsContainer;

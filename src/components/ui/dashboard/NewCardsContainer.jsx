import dayjs from "dayjs";
import { useMemo } from "react";
import useFetchData from "../../../utils/hooks/useFetchdata";

const NewCardsContainer = () => {
  const today = dayjs();

  const { data: customerData } = useFetchData(`user/all`);
  const { data: ordersData } = useFetchData(`orders/all`);

  const newCustomers = useMemo(() => {
    return customerData.filter((customer) => {
      const { created_at } = customer;
      const newCustomers = today.isSame(dayjs(created_at), "day");
      return newCustomers;
    });
  }, [customerData]);

  const newOrders = useMemo(() => {
    return ordersData
      .flatMap((user) => user.orders)
      .filter((order) => {
        const { order_date } = order;
        const newOrders = today.isSame(dayjs(order_date), "day");
        return newOrders;
      });
  }, [ordersData]);

  return (
    <div className="flex flex-col xs:flex-row md:flex-col justify-between gap-5">
      <div className="dark:bg-dark-100 py-7 px-5 md:pl-8 md:pr-10 rounded-md shadow-md dark:shadow-gray-300 flex-1">
        <h6 className="mb-2">New Customers</h6>

        <div className="flex items-center gap-4">
          <p className="text-5xl font-bold">{newCustomers.length}</p>
          <p className="text-sm dark:text-green-300 dark:bg-green-500/40 py-0.5 px-3 rounded-md">
            +18.7%
          </p>
        </div>
      </div>

      <div className="dark:bg-dark-100 py-7 px-5 md:pl-8 md:pr-10 rounded-md shadow-md dark:shadow-gray-300 flex-1">
        <h6 className="mb-2">New Orders</h6>

        <div className="flex items-center gap-4">
          <p className="text-5xl font-bold">{newOrders.length}</p>
          <p className="text-sm dark:text-green-300 dark:bg-green-500/40 py-0.5 px-3 rounded-md">
            +18.7%
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewCardsContainer;

import { useContext } from 'react';
import LineChart from '../../charts/LineChart';
import dayjs from 'dayjs';
import { DashboardContext } from '../../../context/DashboardContext';
import { useMemo } from 'react';

const OrdersOverTime = () => {
  const today = dayjs();

  const { ordersData } = useContext(DashboardContext);;

  const ordersByDay = useMemo(() => {
    if (!ordersData || ordersData.length === 0) return Array(10).fill(0);

    const days = Array.from({ length: 7 }, (_, i) =>
      today.subtract(6 - i, "day").startOf("day")
    );

    return days.map((day) => {
      const total = ordersData
        .flatMap((user) => user.orders)
        .filter((order) =>
          day.isSame(dayjs(order.order_date).startOf("day"), "day")
        )
        .flatMap((order) => order.order_items).length
      return total;
    });
  }, [ordersData]);

 const labels = Array.from({ length: 7 }, (v, i) =>
    dayjs()
      .subtract(6 - i, "day")
      .format("MMM D")
  );

  return (
    <div className="bg-dark-100 p-5 rounded-md shadow-md shadow-gray-300 flex flex-col gap-3 overflow-x-auto lg:col-span-2">
      <div className="flex flex-col gap-1 sm:flex-row justify-between w-full">
        <h1 className="font-bold text-lg">Orders Over Time</h1>
        <h1 className="text-sm sm:text-end">Last 7 Days</h1>
      </div>

      <div className="min-w-[300px] h-full flex justify-center">
        <LineChart labels={labels} dataValues={ordersByDay}/>
      </div>
    </div>
  );
};

export default OrdersOverTime;
import { useMemo } from "react";
import useFetchData from "../../../utils/hooks/useFetchdata";
import LineChart from "../../charts/LineChart";
import dayjs from "dayjs";
import { useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";

const SaleGraph = () => {
  const today = dayjs();

  const { ordersData } = useContext(DashboardContext);

  const salesByDay = useMemo(() => {
    if (!ordersData || ordersData.length === 0) return Array(10).fill(0);

    const days = Array.from({ length: 10 }, (_, i) =>
      today.subtract(9 - i, "day").startOf("day")
    );

    return days.map((day) => {
      const total = ordersData
        .flatMap((user) => user.orders)
        .filter((order) => order.status === "completed")
        .filter((order) =>
          day.isSame(dayjs(order.order_date).startOf("day"), "day")
        )
        .flatMap((order) => order.order_items)
        .reduce((sum, item) => sum + item.subtotal, 0);

      return total;
    });
  }, [ordersData]);

  const labels = Array.from({ length: 10 }, (v, i) =>
    today.subtract(9 - i, "day").format("MMM D")
  );

  return (
    <div className="bg-dark-100 p-5 rounded-md shadow-md shadow-gray-300 flex flex-col gap-3 overflow-x-auto flex-1">
      <div className="flex flex-col gap-1 sm:flex-row justify-between">
        <h1 className="font-bold text-lg">Sales</h1>
        <h1 className="text-sm">Last 10 Days</h1>
      </div>

      <div className="min-w-[300px] h-full flex justify-center">
        <LineChart labels={labels} dataValues={salesByDay} />
      </div>
    </div>
  );
};

export default SaleGraph;

import LineChart from "../../charts/LineChart";
import dayjs from "dayjs";

const SaleGraph = () => {
  const labels = Array.from({ length: 10 }, (v, i) =>
    dayjs()
      .subtract(9 - i, "day")
      .format("MMM D")
  );

  return (
    <div className="dark:bg-dark-100 p-5 rounded-md shadow-md dark:shadow-gray-300 flex flex-col gap-3 overflow-x-auto flex-1">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Sales</h1>
        <h1 className="font-sm">Last 10 Days</h1>
      </div>

      <div className="h-full flex justify-center">
        <LineChart />
      </div>
    </div>
  );
};

export default SaleGraph;

import LineChart from '../../charts/LineChart';
import dayjs from 'dayjs';

const OrdersOverTime = () => {
 const labels = Array.from({ length: 7 }, (v, i) =>
    dayjs()
      .subtract(6 - i, "day")
      .format("MMM D")
  );

  return (
    <div className="dark:bg-dark-100 p-5 rounded-md shadow-md dark:shadow-gray-300 flex flex-col gap-3 overflow-x-auto lg:col-span-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Orders Over Time</h1>
        <h1 className="text-sm">Last 7 Days</h1>
      </div>

      <div className="h-full flex justify-center">
        <LineChart labels={labels} dataValues={[0, 3, 1, 2, 66, 2, 10]}/>
      </div>
    </div>
  );
};

export default OrdersOverTime;
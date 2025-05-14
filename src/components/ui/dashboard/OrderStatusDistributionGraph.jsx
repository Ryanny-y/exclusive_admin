import PieChart from '../../charts/PieChart';

const OrderStatusDistributionGraph = () => {
  const labels = ["Pending", "Processing", "Shipped", "Delivered", "Completed"];

  return (
    <div className="dark:bg-dark-100 p-5 rounded-md shadow-md dark:shadow-gray-300 flex flex-col gap-3 overflow-x-auto">
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-lg">Order Status</h1>
        <h1 className="text-sm">Order Status Distributions</h1>
      </div>

      <div className="h-52 flex justify-center">
        <PieChart labels={labels} dataValues={[2,5,12,36,8]}/>
      </div>
    </div>
  );
}

export default OrderStatusDistributionGraph;

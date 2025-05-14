import PieChart from '../../charts/PieChart';

const SaleByProductCategoryGraph = () => {
  const labels = ["Cellphone", "Keyboard", "Computer", "Headset", "Hat"];

  return (
    <div className="dark:bg-dark-100 p-5 rounded-md shadow-md dark:shadow-gray-300 flex flex-col gap-3 overflow-x-auto">
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-lg">Top Category</h1>
        <h1 className="text-sm">5 Most Sold Product</h1>
      </div>

      <div className="h-52 flex justify-center">
        <PieChart labels={labels} dataValues={[2,5,12,36,8]}/>
      </div>
    </div>
  );
}

export default SaleByProductCategoryGraph;

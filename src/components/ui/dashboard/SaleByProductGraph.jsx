import HorizontalChart from '../../charts/HorizontalChart';

const SaleByProductGraph = () => {

  const labels = ["Cellphone", "Keyboard", "Computer", "Headset", "Hat"];

  return (
    <div className="dark:bg-dark-100 p-5 rounded-md shadow-md dark:shadow-gray-300 flex flex-col gap-3 overflow-x-auto lg:col-span-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Top Products</h1>
        <h1 className="text-sm">5 Most Sold Products</h1>
      </div>

      <div className="h-full flex justify-center">
        <HorizontalChart labels={labels} dataValues={[1,2,3,4,5]}/>
      </div>
    </div>
  );
}

export default SaleByProductGraph;

import PieChart from "../../charts/PieChart";
import styles from '../../../assets/styles/style.module.css';

const SaleByProductCategoryGraph = () => {
  const labels = ["Cellphone", "Keyboard", "Computer", "Headset", "Hat"];

  return (
    <div className="dark:bg-dark-100 p-5 rounded-md shadow-md dark:shadow-gray-300 flex flex-col gap-3">
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-lg">Top Category</h1>
        <h1 className="text-sm">5 Most Sold Product Category</h1>
      </div>

      <div className={`flex items-center justify-center h-52 overflow-x-auto ${styles.customScrollbar}`}>
        <PieChart labels={labels} dataValues={[2, 5, 12, 36, 8]} />
      </div>
    </div>
  );
};

export default SaleByProductCategoryGraph;

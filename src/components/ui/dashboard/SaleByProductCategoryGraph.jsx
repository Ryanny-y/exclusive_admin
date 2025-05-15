import PieChart from "../../charts/PieChart";
import styles from "../../../assets/styles/style.module.css";
import { useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";

const SaleByProductCategoryGraph = () => {
  const { allProducts, ordersData } = useContext(DashboardContext);

  const completedOrders = useMemo(() => {
    return ordersData
      .flatMap((user) => user?.orders)
      .filter((order) => order?.status === "completed")
      .flatMap((order) => order?.order_items);
  }, [ordersData]);

  const [labels, setLabels] = useState([]);
  const [dataValues, setDataValues] = useState([]);

  useEffect(() => {
    if (completedOrders.length > 0 && allProducts.length > 0) {
      const productCountMap = {};

      completedOrders.forEach((item) => {
        const product = allProducts.find((p) => p._id === item.productId);

        if (product) {
          const categories = product.category;
          categories.forEach(category => {
            productCountMap[category] = (productCountMap[category] || 0) + 1
          })
        }
      });

      const sorted = Object.entries(productCountMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      const topLabels = sorted.map(([name]) => name);
      const topValues = sorted.map(([, count]) => count);

      setLabels(topLabels);
      setDataValues(topValues);
    }
  }, [completedOrders, allProducts]);

  return (
    <div className="dark:bg-dark-100 p-5 rounded-md shadow-md dark:shadow-gray-300 flex flex-col gap-3 overflow-x-auto">
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-lg">Top Category</h1>
        <h1 className="text-sm">5 Most Sold Product Category</h1>
      </div>

      <div
        className={`flex items-center justify-center h-52 ${styles.customScrollbar}`}
      >
        <PieChart labels={labels} dataValues={dataValues} />
      </div>
    </div>
  );
};

export default SaleByProductCategoryGraph;

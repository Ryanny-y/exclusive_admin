import { useContext } from "react";
import HorizontalChart from "../../charts/HorizontalChart";
import { DashboardContext } from "../../../context/DashboardContext";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";

const SaleByProductGraph = () => {
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
          const name = product.name;
          productCountMap[name] = (productCountMap[name] || 0) + item.quantity;
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
    <div className="dark:bg-dark-100 p-5 rounded-md shadow-md dark:shadow-gray-300 flex flex-col gap-3 overflow-x-auto lg:col-span-2">
      <div className="flex flex-col gap-1 xs:flex-row justify-between">
        <h1 className="font-bold text-lg">Top Products</h1>
        <h1 className="text-sm sm:text-end">5 Most Sold Products</h1>
      </div>

      <div className="min-w-[300px] h-full flex justify-center">
        <HorizontalChart labels={labels} dataValues={dataValues} />
      </div>
    </div>
  );
};

export default SaleByProductGraph;

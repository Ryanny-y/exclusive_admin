import PieChart from '../../charts/PieChart';
import styles from '../../../assets/styles/style.module.css';
import { useContext } from 'react';
import { DashboardContext } from '../../../context/DashboardContext';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const OrderStatusDistributionGraph = () => {

  const { ordersData } = useContext(DashboardContext);

  const allOrders = useMemo(() => {
    const statusDistribution = {};

    const allOrders = ordersData.flatMap(user => user?.orders);
    
    return allOrders;
  }, [ordersData]);

  // const labels = ["Pending", "Processing", "Shipped", "Delivered", "Completed"];
  const [ labels, setLabels ] = useState([]);
  const [ dataValues, setDataValues ] = useState([]);

  useEffect(() => {
    if(allOrders.length > 0 && ordersData.length > 0) {
      const statusDistributions = {};
      
      allOrders.forEach(order => {
        const statusName = order?.status;
        statusDistributions[statusName] = (statusDistributions[statusName] || 0) + 1;
      })

      const sorted = Object.entries(statusDistributions)
        .sort((a, b) => a[1] - b[1])
        .slice(0, 5);
      
      const statusLabels = sorted.map(([statusName]) => statusName);
      const statusValues = sorted.map(([, count]) => count);

      setLabels(statusLabels);
      setDataValues(statusValues);
    }
  }, [allOrders, ordersData])  

  return (
    <div className="bg-dark-100 p-5 rounded-md shadow-md shadow-gray-300 flex flex-col gap-3">
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-lg">Order Status</h1>
        <h1 className="text-sm">Order Status Distributions</h1>
      </div>

      <div className={`flex items-center justify-center h-52 overflow-x-auto ${styles.customScrollbar}`}>
        <PieChart labels={labels} dataValues={dataValues}/>
      </div>
    </div>
  );
}

export default OrderStatusDistributionGraph;
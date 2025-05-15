import SummaryCard from "./SummaryCard";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { LuPackageCheck } from "react-icons/lu";
import { FaRegClipboard } from "react-icons/fa";
import { useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";

const Summaries = () => {
  const { totalSales, totalOrders, totalCustomers, totalProducts } = useContext(DashboardContext);

  return (
    <section
      id="card_summaries"
      className="grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      <SummaryCard
        title="Total Sales"
        value={`₱ ${totalSales}`}
        icon={<IoAnalyticsOutline strokeWidth={2} />}
      />
      <SummaryCard
        title="Total Orders"
        value={totalOrders.length}
        icon={<FaRegClipboard strokeWidth={2} />}
      />
      <SummaryCard
        title="Total Customers"
        value={totalCustomers.length}
        icon={<BsPeople />}
      />
      <SummaryCard
        title="Total Products"
        value={totalProducts.length}
        icon={<LuPackageCheck strokeWidth={2} />}
      />
    </section>
  );
};

export default Summaries;

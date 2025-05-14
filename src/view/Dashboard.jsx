import SummaryCard from "../components/ui/dashboard/SummaryCard";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaRegClipboard } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { LuPackageCheck } from "react-icons/lu";
import SaleGraph from "../components/ui/dashboard/SaleGraph";
import SaleByProductGraph from "../components/ui/dashboard/SaleByProductGraph";
import SaleByProductCategoryGraph from "../components/ui/dashboard/SaleByProductCategoryGraph";
import OrderStatusDistributionGraph from "../components/ui/dashboard/OrderStatusDistributionGraph";

function Dashboard() {
  return (
    <main className="flex flex-col gap-5 p-5">
      <section
        id="card_summaries"
        className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-4 gap-5"
      >
        <SummaryCard
          title="Total Sales"
          value={123}
          icon={<IoAnalyticsOutline strokeWidth={2} />}
        />
        <SummaryCard
          title="Total Orders"
          value={13}
          icon={<FaRegClipboard strokeWidth={2} />}
        />
        <SummaryCard title="Total Customers" value={100} icon={<BsPeople />} />
        <SummaryCard
          title="Total Products"
          value={661}
          icon={<LuPackageCheck strokeWidth={2} />}
        />
      </section>

      <section id="charts" className="flex flex-col gap-5">
        {/* NEW AND SALES CHART */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col xs:flex-row md:flex-col justify-between gap-5">
            <div className="dark:bg-dark-100 py-7 px-5 md:pl-8 md:pr-10 rounded-md shadow-md dark:shadow-gray-300 flex-1">
              <h6 className="mb-2">New Clients</h6>

              <div className="flex items-center gap-4">
                <p className="text-5xl font-bold">30</p>
                <p className="text-sm dark:text-green-300 dark:bg-green-500/40 py-0.5 px-3 rounded-md">
                  +18.7%
                </p>
              </div>
            </div>

            <div className="dark:bg-dark-100 py-7 px-5 md:pl-8 md:pr-10 rounded-md shadow-md dark:shadow-gray-300 flex-1">
              <h6 className="mb-2">New Orders</h6>

              <div className="flex items-center gap-4">
                <p className="text-5xl font-bold">30</p>
                <p className="text-sm dark:text-green-300 dark:bg-green-500/40 py-0.5 px-3 rounded-md">
                  +18.7%
                </p>
              </div>
            </div>
          </div>

          <SaleGraph />
        </div>

        {/* SALE BY PRODUCT, SALES BY PRODUCT CATEGORY AND ORDER STATUS*/}
        <div className="flex flex-col gap-4 md:flex-row">
          <SaleByProductGraph />
          <SaleByProductCategoryGraph />
          <OrderStatusDistributionGraph />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

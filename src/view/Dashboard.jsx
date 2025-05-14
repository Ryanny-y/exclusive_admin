import SaleGraph from "../components/ui/dashboard/SaleGraph";
import SaleByProductGraph from "../components/ui/dashboard/SaleByProductGraph";
import SaleByProductCategoryGraph from "../components/ui/dashboard/SaleByProductCategoryGraph";
import OrderStatusDistributionGraph from "../components/ui/dashboard/OrderStatusDistributionGraph";
import OrdersOverTime from "../components/ui/dashboard/OrdersOverTime";
import Summaries from "../components/ui/dashboard/Summaries";

function Dashboard() {
  return (
    <main className="flex flex-col gap-5 px-5 pt-5 pb-10">
      <Summaries />

      <section id="charts" className="flex flex-col gap-5">
        {/* NEW AND SALES CHART */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col xs:flex-row md:flex-col justify-between gap-5">
            <div className="dark:bg-dark-100 py-7 px-5 md:pl-8 md:pr-10 rounded-md shadow-md dark:shadow-gray-300 flex-1">
              <h6 className="mb-2">New Customers</h6>

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

        {/* SALE BY PRODUCT, SALES BY PRODUCT CATEGORY*/}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <SaleByProductGraph />
          <SaleByProductCategoryGraph />
        </div>

        {/* ORDER STATUS DISTRIBUTION */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <OrderStatusDistributionGraph />
          <OrdersOverTime />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

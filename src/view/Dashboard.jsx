import SaleGraph from "../components/ui/dashboard/SaleGraph";
import SaleByProductGraph from "../components/ui/dashboard/SaleByProductGraph";
import SaleByProductCategoryGraph from "../components/ui/dashboard/SaleByProductCategoryGraph";
import OrderStatusDistributionGraph from "../components/ui/dashboard/OrderStatusDistributionGraph";
import OrdersOverTime from "../components/ui/dashboard/OrdersOverTime";
import Summaries from "../components/ui/dashboard/Summaries";
import NewCardsContainer from "../components/ui/dashboard/NewCardsContainer";

function Dashboard() {
  return (
    <main className="flex flex-col gap-5 px-5 pt-5 pb-10">
      <Summaries />

      <section id="charts" className="flex flex-col gap-5">
        {/* NEW AND SALES CHART */}
        <div className="flex flex-col md:flex-row gap-4">
          <NewCardsContainer />

          <SaleGraph />
        </div>

        {/* SALE BY PRODUCT, SALES BY PRODUCT CATEGORY*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SaleByProductGraph />
          <SaleByProductCategoryGraph />
        </div>

        {/* ORDER STATUS DISTRIBUTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <OrderStatusDistributionGraph />
          <OrdersOverTime />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

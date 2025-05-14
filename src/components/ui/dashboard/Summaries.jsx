import SummaryCard from "./SummaryCard";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { LuPackageCheck } from "react-icons/lu";
import { FaRegClipboard } from "react-icons/fa";

const Summaries = () => {
  

  return (
    <section
      id="card_summaries"
      className="grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-4 gap-5"
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
  );
};

export default Summaries;

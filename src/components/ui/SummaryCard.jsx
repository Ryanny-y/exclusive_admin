import { GoGraph } from "react-icons/go";

const SummaryCard = ({ title, value}) => {
  return (
    <div className="dark:bg-dark-100 flex items-center gap-5 py-7 px-8 rounded-md shadow-md dark:shadow-gray-300">
      <div className="rounded-full dark:bg-[#d4ac90]/50 p-3">
          <GoGraph className="text-[#ff6900] font-thin text-lg" strokeWidth={2}/>
      </div>
      
      <div className="flex flex-col gap-1.5">
        <p className="text-lg font-bold">3,322</p>
        <p className="text-sm dark:text-gray-100">Total Sales</p>
      </div>
    </div>
  )
};

export default SummaryCard;

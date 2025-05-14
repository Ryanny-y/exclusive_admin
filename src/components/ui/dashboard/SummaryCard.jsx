const SummaryCard = ({ title, value, icon }) => {
  return (
    <div className="dark:bg-dark-100 flex items-center gap-5 px-4 py-5 sm:py-7 sm:px-8 rounded-md shadow-md dark:shadow-gray-300">
      <div className="rounded-full dark:bg-light-100/20 p-3 font-thin text-xl">
          {icon}
      </div>
      
      <div className="flex flex-col gap-1.5">
        <p className="text-lg font-bold">{value}</p>
        <p className="text-sm dark:text-gray-100">{title}</p>
      </div>
    </div>
  )
};

export default SummaryCard;

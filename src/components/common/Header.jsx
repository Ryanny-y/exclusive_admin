import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import profilePlaceholder from '../../assets/images/profile_placeholder.png';

const Header = () => {
  return (
    <header className="dark:bg-dark-100 flex items-center py-5 px-5 sticky top-0 right-0 left-0 w-full gap-10">
      <section className="relative rounded-md dark:bg-gray-200 pl-7 grow">
        <IoSearch className="absolute dark:text-gray-100 top-1/2 -translate-y-1/2 left-3 text-lg"/>
        <input type="text" placeholder="Search" className="w-full dark:bg-gray-200 text-sm py-3 px-3 rounded-lg outline-none"/>
      </section>

      <section className="flex items-center gap-4">
        <div id="notification">

          <FaBell className="text-lg dark:text-gray-100"/>
        </div>

        <div id="account" className="flex items-center gap-3">
          <img src={profilePlaceholder} alt="Profile" className="rounded-full h-6 w-6"/>
          <p className="text-[14px] font-semibold dark:text-gray-100">Ryanny Romero</p>
        </div>
      </section>
    </header>
  )
};

export default Header;

import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import profilePlaceholder from '../../assets/images/profile_placeholder.png';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { userData } = useContext(AuthContext);

  return (
    <header className="bg-dark-100 flex flex-col sm:flex-row items-center py-5 px-5 sticky top-0 right-0 left-0 w-full gap-5">
      <section className="relative rounded-md bg-gray-200 pl-7 grow">
        <IoSearch className="absolute text-gray-100 top-1/2 -translate-y-1/2 left-3 text-lg"/>
        <input type="text" placeholder="Search" className="w-full bg-gray-200 text-sm py-3 px-3 rounded-lg outline-none"/>
      </section>

      <section className="flex items-center gap-4">
        <div id="notification">
          <FaBell className="text-lg text-gray-100"/>
        </div>

        <div id="account" className="flex items-center gap-2">
          <img src={profilePlaceholder} alt="Profile" className="rounded-full h-6 w-6"/>
          <p className="text-[14px] font-semibold text-gray-100">{userData?.data?.firstName}</p>
        </div>
      </section>
    </header>
  )
};

export default Header;

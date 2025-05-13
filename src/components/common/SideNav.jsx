import { Link } from "react-router";
import logo from "../../assets/images/exclusive_logo.png";
import { IoHomeOutline, IoAnalyticsOutline } from "react-icons/io5";
import { LuPackageCheck } from "react-icons/lu";
import { FaRegClipboard } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { MdOutlinePayment, MdOutlineAccountCircle, MdOutlineFeedback  } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import styles from "../../assets/styles/style.module.css";

const SideNav = () => {
  return (
    <aside
      className="flex flex-col gap-10 dark:bg-dark-100 dark:text-light-100 h-screen py-10 px-5 w-72"
    >
      <Link className="flex items-center gap-1 font-bold lg:text-2xl">
        <img src={logo} alt="Exclusive Logo" className="h-10 w-10" />
        <h1>Exclusive</h1>
      </Link>

      <nav className={`flex flex-col gap-10 main_nav ${styles.customScrollbar}`}>
        <section>
          <h3 className="text-gray-300 mb-4">Menu</h3>

          <ul className="flex flex-col gap-2 text-gray-100 -ml-2">
            <li className="group hover:bg-gray-200 hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <IoHomeOutline className="text-lg text-white group-hover:text-red-300 duration-300" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="group hover:bg-gray-200 hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <LuPackageCheck className="text-lg text-white group-hover:text-red-300 duration-300" />
                <p>Products</p>
              </Link>
            </li>
            <li className="group hover:bg-gray-200 hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <FaRegClipboard className="text-lg text-white group-hover:text-red-300 duration-300" />
                <p>Orders</p>
              </Link>
            </li>
            <li className="group hover:bg-gray-200 hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <BsPeople className="text-lg text-white group-hover:text-red-300 duration-300" />
                <p>Customers</p>
              </Link>
            </li>
            <li className="group hover:bg-gray-200 hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <MdOutlinePayment className="text-lg text-white group-hover:text-red-300 duration-300" />
                <p>Payments</p>
              </Link>
            </li>
            <li className="group hover:bg-gray-200 hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <MdOutlinePayment className="text-lg text-white group-hover:text-red-300 duration-300" />
                <p>Payments</p>
              </Link>
            </li>
            <li className="group hover:bg-gray-200 hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <IoAnalyticsOutline className="text-lg text-white group-hover:text-red-300 duration-300" />
                <p>Analytics/Reports</p>
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-gray-300 mb-4">Account</h3>

          <ul className="flex flex-col gap-2 text-gray-100 -ml-2">
            <li className="group hover:bg-gray-200 hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <MdOutlineAccountCircle className="text-lg text-white group-hover:text-red-300 duration-300" />
                <p>Profile</p>
              </Link>
            </li>
            <li className="group hover:bg-gray-200 hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <CiSettings className="text-lg text-white group-hover:text-red-300 duration-300" />
                <p>Account Settings</p>
              </Link>
            </li>
          </ul>
        </section>

         <section>
          <h3 className="text-gray-300 mb-4">More</h3>

          <ul className="flex flex-col gap-2 text-gray-100 -ml-2">
            <li className="group hover:bg-gray-200 hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <MdOutlineFeedback className="text-lg text-white group-hover:text-red-300 duration-300" />
                <p>Feedback</p>
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </aside>
  );
};

export default SideNav;
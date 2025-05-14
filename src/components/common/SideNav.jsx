import { Link } from "react-router";
import logo from "../../assets/images/exclusive_logo.PNG";
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
      className="hidden md:flex flex-col gap-10 dark:bg-dark-100 dark:text-light-100 sticky top-0 bottom-0 h-screen py-10 pl-5 w-72"
    >
      <Link className="flex items-center gap-1 font-bold lg:text-2xl">
        <img src={logo} alt="Exclusive Logo" className="h-10 w-10" />
        <h1>Exclusive</h1>
      </Link>

      <nav className={`flex flex-col gap-10 main_nav ${styles.customScrollbar} pr-5`}>
        <section>
          <h3 className="text-dark-200 font-medium dark:text-gray-300 mb-4">Menu</h3>

          <ul className="flex flex-col gap-2 text-dark-100 font-medium dark:text-gray-100">
            <li className="group hover:bg-slate-200 dark:hover:bg-gray-200 dark:hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link to='' className="flex items-center gap-2">
                <IoHomeOutline className="text-lg dark:text-white group-hover:text-red-300 duration-300" />
                <p className="group-hover:text-red-300 dark:group-hover:text-light-100">Dashboard</p>
              </Link>
            </li>
            <li className="group hover:bg-slate-200 dark:hover:bg-gray-200 dark:hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link to='/products' className="flex items-center gap-2">
                <LuPackageCheck className="text-lg dark:text-white group-hover:text-red-300 duration-300" />
                <p className="group-hover:text-red-300 dark:group-hover:text-light-100">Products</p>
              </Link>
            </li>
            <li className="group hover:bg-slate-200 dark:hover:bg-gray-200 dark:hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <FaRegClipboard className="text-lg dark:text-white group-hover:text-red-300 duration-300" />
                <p className="group-hover:text-red-300 dark:group-hover:text-light-100">Orders</p>
              </Link>
            </li>
            <li className="group hover:bg-slate-200 dark:hover:bg-gray-200 dark:hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <BsPeople className="text-lg dark:text-white group-hover:text-red-300 duration-300" />
                <p className="group-hover:text-red-300 dark:group-hover:text-light-100">Customers</p>
              </Link>
            </li>
            <li className="group hover:bg-slate-200 dark:hover:bg-gray-200 dark:hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <MdOutlinePayment className="text-lg dark:text-white group-hover:text-red-300 duration-300" />
                <p className="group-hover:text-red-300 dark:group-hover:text-light-100">Payments</p>
              </Link>
            </li>
            <li className="group hover:bg-slate-200 dark:hover:bg-gray-200 dark:hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <IoAnalyticsOutline className="text-lg dark:text-white group-hover:text-red-300 duration-300" />
                <p className="group-hover:text-red-300 dark:group-hover:text-light-100">Analytics/Reports</p>
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-dark-200 font-medium dark:text-gray-300 mb-4">Account</h3>

          <ul className="flex flex-col gap-2 text-dark-100 font-medium dark:text-gray-100">
            <li className="group hover:bg-slate-200 dark:hover:bg-gray-200 dark:hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <MdOutlineAccountCircle className="text-lg dark:text-white group-hover:text-red-300 duration-300" />
                <p className="group-hover:text-red-300 dark:group-hover:text-light-100">Profile</p>
              </Link>
            </li>
            <li className="group hover:bg-slate-200 dark:hover:bg-gray-200 dark:hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <CiSettings className="text-lg dark:text-white group-hover:text-red-300 duration-300" />
                <p className="group-hover:text-red-300 dark:group-hover:text-light-100">Account Settings</p>
              </Link>
            </li>
          </ul>
        </section>

         <section>
          <h3 className="text-dark-200 font-medium dark:text-gray-300 mb-4">More</h3>

          <ul className="flex flex-col gap-2 text-dark-100 font-medium dark:text-gray-100">
            <li className="group hover:bg-slate-200 dark:hover:bg-gray-200 dark:hover:text-light-100 duration-300 py-2 px-3 rounded-lg">
              <Link className="flex items-center gap-2">
                <MdOutlineFeedback className="text-lg dark:text-white group-hover:text-red-300 duration-300" />
                <p className="group-hover:text-red-300 dark:group-hover:text-light-100">Feedback</p>
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </aside>
  );
};

export default SideNav;
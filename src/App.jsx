import { Outlet } from "react-router";
import SideNav from "./components/common/SideNav";
import Header from "./components/common/Header";

const App = () => {

  // CHECK CREDENTIALS HERE

  return (
    <main className="flex dark:bg-dark-200 dark:text-light-100 relative">
      <SideNav />
      
      <section className="grow">
        <Header />

        <div className="p-5">
          <Outlet />
        </div>
      </section>
    </main>
  )
}

export default App;

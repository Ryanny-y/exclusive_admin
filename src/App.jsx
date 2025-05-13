import { Outlet } from "react-router";
import SideNav from "./components/common/SideNav";

const App = () => {

  // CHECK CREDENTIALS HERE

  return (
    <main className="flex gap-5 dark:bg-dark-200 dark:text-light-100 relative">
      <SideNav />
      <section className="py-5">
        Main Content
      </section>
    </main>
  )
}

export default App;

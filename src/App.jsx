import { Outlet } from "react-router";
import SideNav from "./components/common/SideNav";
import Header from "./components/common/Header";
import useWindowResize from "./utils/hooks/useWindowResize";


const App = () => {

  // CHECK CREDENTIALS HERE
  const windowSize = useWindowResize();

  return (
    <main className="flex dark:bg-dark-200 dark:text-light-100">
      <SideNav />
      
      <section style={{width: windowSize >= 1024  ? `calc(100% - 288px)` : '100%' }}>
        <Header />

        <div>
          <Outlet />
        </div>
      </section>
    </main>
  )
}

export default App;

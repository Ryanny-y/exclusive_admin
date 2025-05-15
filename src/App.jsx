import { Outlet, useNavigate } from "react-router";
import SideNav from "./components/common/SideNav";
import Header from "./components/common/Header";
import useWindowResize from "./utils/hooks/useWindowResize";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import DashBoardContextProvider from "./context/DashboardContext";

const App = () => {
  const navigate = useNavigate();
  const { userData, isAuthenticated } = useContext(AuthContext);
  // CHECK CREDENTIALS HERE
  useEffect(() => {
    if (!userData || !isAuthenticated) {
      navigate("/login");
    }
  }, [userData, isAuthenticated]);

  const windowSize = useWindowResize();

  return (
    <DashBoardContextProvider>
      <main className="flex dark:bg-dark-200 dark:text-light-100">
        <SideNav />

        <section
          style={{ width: windowSize >= 1024 ? `calc(100% - 288px)` : "100%" }}
        >
          <Header />

          <div>
            <Outlet />
          </div>
        </section>
      </main>
    </DashBoardContextProvider>
  );
};

export default App;

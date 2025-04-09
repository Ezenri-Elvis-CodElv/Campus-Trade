import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeRoutes = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeRoutes;

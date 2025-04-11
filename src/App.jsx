import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Elvis/LandingPage";
import HomeRoutes from "./routes/HomeRoute";
import SignUp from "./Samuel/Auth/SignUp";
import Login from "./Samuel/Auth/Login";
import ResetPassword from "./Samuel/Auth/ResetPassword";
import PrivateRoute from "./routes/PrivateRoute";
import ForgetPassword from "./Samuel/Auth/ForgetPassword";
import Categories from "./components/Categories";
import ExplorePage from "./Edith/ExplorePage";
import Dashboard from "./Elvis/Dashboard";
import CreatePost from "./DashboardComponents'/CreatePost";
import ChangePhoneNumber from "./DashboardComponents'/ChangePhoneNumber";
import ChangePassword from "./DashboardComponents'/ChangePassword";
import GetVerified from "./DashboardComponents'/GetVerified";
import RecentPost from "./DashboardComponents'/RecentPost";
// import ProductDetailPage from "./Chidera/ProductDetailPage";
import PendingPost from "./DashboardComponents'/PendingPost";
import Posts from "./DashboardComponents'/Posts";
import Ads from "./DashboardComponents'/Ads";
import AccountInformation from "./DashboardComponents'/AccountInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoutes />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/explorepage",
        element: <ExplorePage />,
      },
      // {
      //   path: "/productdetailpage/:_id",
      //   element: <ProductDetailPage />,
      // },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/accountinformation",
        element: <AccountInformation />,
      },
      {
        path: "/dashboard/changephonenumber",
        element: <ChangePhoneNumber />,
      },
      {
        path: "/dashboard/changepassword",
        element: <ChangePassword />,
      },
      {
        path: "/dashboard/getverified",
        element: <GetVerified />,
      },
      {
        path: "/dashboard/recentpost",
        element: <RecentPost />,
      },
      {
        path: "/dashboard/pendingpost",
        element: <PendingPost />,
      },
      {
        path: "/dashboard/createpost",
        element: <CreatePost />,
      },
      {
        path: "/dashboard/posts",
        element: <Posts />,
      },
      {
        path: "/dashboard/ads",
        element: <Ads />,
      },
    ],
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

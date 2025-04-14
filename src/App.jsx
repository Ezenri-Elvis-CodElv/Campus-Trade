import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Elvis/LandingPage";
import LayoutWithLoader from "./routes/LayoutWithLoader";
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
import ProductDetailPage from "./Chidera/ProductDetailPage";
import PendingPost from "./DashboardComponents'/PendingPost";
import Posts from "./DashboardComponents'/Posts";
import Ads from "./DashboardComponents'/Ads";
import ProfilePage from "./Chidera/ProfilePage"
import AccountInformation from "./DashboardComponents'/AccountInformation";
import AdminDashboard from "./Admin/AdminDashboard";
import ApproveInfo from "./Admin/ApproveInfo";
import ApproveProfile from "./Admin/ApproveUserPost";
import VerifyUser from "./Admin/VerifyUser";
import DeleteUser from "./Admin/DeleteUser";
import ApproveUserPost from "./Admin/ApproveUserPost";
import AcceptUserPayment from "./Admin/AcceptUserPayment";
import AdminPendingPost from "./Admin/AdminPendingPost";
import AdminProfile from "./Admin/AdminProfile";
import VerifySuccessful from "./Admin/VerifySuccessful";
// import ProfilePage from "./Chidera/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <LayoutWithLoader />,
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
     
      {
        path: "/productdetailpage/:_id",
        element: <ProductDetailPage />,
      },

      {
        path: "/profilepage",
        element: <ProfilePage />,
      }

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
    path: "/admindashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "/admindashboard",
        element: <AdminProfile />
      },
      {
        path: "/admindashboard/approveinfo",
        element: <ApproveInfo />
      },
      
      {
        path: "/admindashboard/verifyuser",
        element: <VerifyUser />
      },
      {
        path: "/admindashboard/verifysuccessful",
        element: <VerifySuccessful/>

      },
      {
        path: "/admindashboard/deleteuser",
        element: <DeleteUser />
      },
      {
        path: "/admindashboard/approveuserpost",
        element: <ApproveUserPost />
      },
      {
        path: "/admindashboard/adminpendingpost",
        element: <AdminPendingPost />
      },
      {
        path: "/admindashboard/acceptuserpayment",
        element: <AcceptUserPayment />
      }
    ]
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

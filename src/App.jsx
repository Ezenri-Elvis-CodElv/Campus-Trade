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
import ChangePhoneNumber from "./DashboardComponents/ChangePhoneNumber";
import ChangePassword from "./DashboardComponents/ChangePassword";
import GetVerified from "./DashboardComponents/GetVerified";
import RecentPost from "./DashboardComponents/RecentPost";
import ProductDetailPage from "./Chidera/ProductDetailPage";
import PendingPost from "./DashboardComponents/PendingPost";
import Posts from "./DashboardComponents/Posts";
import Ads from "./DashboardComponents/Ads";
import ProfilePage from "./Chidera/ProfilePage";
import AccountInformation from "./DashboardComponents/AccountInformation";
import AdminDashboard from "./Admin/AdminDashboard";
import ApproveInfo from "./Admin/ApproveInfo";
import VerifyUser from "./Admin/VerifyUser";
import DeleteUser from "./Admin/DeleteUser";
import ApproveUserPost from "./Admin/ApproveUserPost";
import AcceptUserPayment from "./Admin/AcceptUserPayment";
import AdminPendingPost from "./Admin/AdminPendingPost";
import AdminProfile from "./Admin/AdminProfile";
import SellerProfile from "./DashboardComponents/SellerProfile";
import CreatePost from "./DashboardComponents/CreatePost";
import VerifySuccessful from "./Admin/VerifySuccessful";
import Verification from "./Samuel/Auth/Verification";
import NotFoundPage from "./components/NotFoundPage";
import PaymentStatus from "./DashboardComponents/PaymentStatus";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      // Public routes with header/footer
      {
        element: <LayoutWithLoader />,
        children: [
          { index: true, element: <LandingPage /> },
          { path: "categories/:id", element: <Categories /> },
          { path: "explorepage", element: <ExplorePage /> },
          { path: "productdetailpage/:id", element: <ProductDetailPage /> },
          { path: "profilepage", element: <ProfilePage /> },
        ],
      },

      // Authentication routes without header/footer
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "resetpassword/:token", element: <ResetPassword /> },
      { path: "forgetpassword", element: <ForgetPassword /> },
      { path: "verification/:token", element: <Verification /> },

      // Protected User Dashboard
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { index: true, element: < SellerProfile /> },
          { path: "accountinformation", element: <AccountInformation /> },
          { path: "changephonenumber", element: <ChangePhoneNumber /> },
          { path: "changepassword", element: <ChangePassword /> },
          { path: "sellerprofile", element: <GetVerified /> },
          { path: "recentpost", element: <RecentPost /> },
          { path: "pendingpost", element: <PendingPost /> },
          { path: "createpost", element: <CreatePost /> },
          { path: "posts", element: <Posts /> },
          { path: "ads", element: <Ads /> },
          { path: "paymentstatus/:ref", element: <PaymentStatus /> },
        ],
      },

      {
        path: "admindashboard",
        element: <AdminDashboard />,
        children: [
          { index: true, element: <AdminProfile /> },
          { path: "approveinfo", element: <ApproveInfo /> },
          { path: "verifyuser", element: <VerifyUser /> },
          { path: "verifysuccessful", element: <VerifySuccessful /> },
          { path: "deleteuser", element: <DeleteUser /> },
          { path: "approveuserpost", element: <ApproveUserPost /> },
          { path: "adminpendingpost", element: <AdminPendingPost /> },
          { path: "acceptuserpayment", element: <AcceptUserPayment /> },
        ],
      },

      // 404 Catch-all
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

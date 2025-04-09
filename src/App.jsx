import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Elvis/LandingPage";
import HomeRoutes from "./routes/HomeRoute";
import SignUp from "./Samuel/Auth/SignUp";
import Login from "./Samuel/Auth/Login";
import ResetPassword from "./samuel/Auth/ResetPassword";
import PrivateRoute from "./routes/PrivateRoute";
import ForgetPassword from "./Samuel/Auth/ForgetPassword";
import Categories from "./components/Categories";
import ExplorePage from "./Edith/ExplorePage";

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
    path: "/forgetpass",
    element: <ForgetPassword />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />, 
    children: [
      {
        path: "/dashboard",
        element: <div>Dashboard Page</div>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import React from "react";
import {
  createBrowserRouter,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import OutletPage from "../../components/Outlet";
import Home from "../../components/Home";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = () => {
  // let currentUser = false;
  const location = useLocation();
  const { currentUser } = useAuth();
  console.log(currentUser);
  if (currentUser === undefined) {
    return null; // or loading indicator/spinner/etc
  }

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletPage />,
    children: [
      {
        path: "",
        element: <PrivateRoute />,
        children: [{ path: "", element: <Home /> }],
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Outlet from "../../components/Outlet";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Outlet />,
		children: [
			{
				path: "/",
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

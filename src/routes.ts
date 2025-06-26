import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/root-layout";
import Home from "./pages/home";

export const routes = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
		],
	},
]);

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./routes";

gsap.registerPlugin(ScrollTrigger, SplitText);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={routes} />
	</StrictMode>,
);

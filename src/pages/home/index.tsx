import { Navbar } from "@/components/navbar";
import { Cocktails } from "./components/cocktails";
import { Hero } from "./components/hero";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Cocktails />
		</main>
	);
}

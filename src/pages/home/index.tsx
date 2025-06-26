import { Navbar } from "@/components/navbar";
import { Hero } from "./components/hero";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<div className="bg-black h-dvh" />
		</main>
	);
}

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { About } from "./components/about";
import { Art } from "./components/art";
import { Cocktails } from "./components/cocktails";
import { Hero } from "./components/hero";
import { Menu } from "./components/menu";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Cocktails />
			<About />
			<Art />
			<Menu />
			<Footer />
		</main>
	);
}

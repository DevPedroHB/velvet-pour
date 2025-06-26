import { navLinks } from "@/constants/nav-links";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router";

export function Navbar() {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: "nav",
				start: "bottom top",
			},
		});

		navTween.fromTo(
			"nav",
			{ backgroundColor: "transparent" },
			{
				backgroundColor: "#00000050",
				backgroundFilter: "blur(10px)",
				duration: 1,
				ease: "power1.inOut",
			},
		);
	});

	return (
		<nav>
			<div>
				<Link to="/" className="flex items-center gap-2">
					<img src="/images/logo.png" alt="Velvet Pour" />
					<p>Velvet Pour</p>
				</Link>
				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

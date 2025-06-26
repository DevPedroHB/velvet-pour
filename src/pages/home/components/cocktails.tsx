import { cocktails } from "@/constants/cocktails";
import { mocktails } from "@/constants/mocktails";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Cocktails() {
	useGSAP(() => {
		const parallaxTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#cocktails",
				start: "top 30%",
				end: "bottom 80%",
				scrub: true,
			},
		});

		parallaxTimeline
			.from("#c-left-leaf", { x: -100, y: 100 })
			.from("#c-right-leaf", { x: 100, y: 100 });
	});

	return (
		<section id={"cocktails"} className="noisy">
			<img
				id={"c-left-leaf"}
				src="/images/cocktail-left-leaf.png"
				alt="Left leaf"
			/>
			<img
				id={"c-right-leaf"}
				src="/images/cocktail-right-leaf.png"
				alt="Right leaf"
			/>
			<div className="list">
				<div className="popular">
					<h2>Most popular cocktails:</h2>
					<ul>
						{cocktails.map((cocktail) => (
							<li key={cocktail.name}>
								<div className="md:me-28">
									<h3>{cocktail.name}</h3>
									<p>
										{cocktail.country} | {cocktail.detail}
									</p>
								</div>
								<span>- {cocktail.price}</span>
							</li>
						))}
					</ul>
				</div>
				<div className="loved">
					<h2>Most loved mocktails:</h2>
					<ul>
						{mocktails.map((mocktail) => (
							<li key={mocktail.name}>
								<div className="me-28">
									<h3>{mocktail.name}</h3>
									<p>
										{mocktail.country} | {mocktail.detail}
									</p>
								</div>
								<span>- {mocktail.price}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

import { featureLists } from "@/constants/feature-lists";
import { goodLists } from "@/constants/good-lists";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export function Art() {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	useGSAP(() => {
		const start = isMobile ? "top 20%" : "top top";

		const maskTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#art",
				start,
				end: "bottom center",
				scrub: 1.5,
				pin: true,
			},
		});

		maskTimeline
			.to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
			.to(".masked-img", {
				scale: 1.3,
				maskPosition: "center",
				maskSize: "400%",
				duration: 1,
				ease: "power1.inOut ",
			})
			.to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
	});

	return (
		<div id={"art"}>
			<div className="mx-auto pt-20 h-full container">
				<h2 className="will-fade">The ART</h2>
				<div className="content">
					<ul className="space-y-4 will-fade">
						{goodLists.map((feature, index) => (
							<li
								key={`${index}-${feature}`}
								className="flex items-center gap-2"
							>
								<img src="/images/check.png" alt="Check" />
								<p>{feature}</p>
							</li>
						))}
					</ul>
					<div className="cocktail-img">
						<img
							src="/images/under-img.jpg"
							alt="Cocktail"
							className="size-full object-contain abs-center masked-img"
						/>
					</div>
					<ul className="space-y-4 will-fade">
						{featureLists.map((feature, index) => (
							<li
								key={`${index}-${feature}`}
								className="flex justify-start items-center gap-2"
							>
								<img src="/images/check.png" alt="Check" />
								<p className="w-60 md:w-fit">{feature}</p>
							</li>
						))}
					</ul>
				</div>
				<div className="masked-container">
					<h2 className="will-fade">Sip-Worthy Perfection</h2>
					<div id={"masked-content"}>
						<h3>Made with Craft, Poured with Passion</h3>
						<p>
							This isn’t just a drink. It’s a carefully crafted moment made just
							for you.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

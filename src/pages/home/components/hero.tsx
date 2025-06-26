import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export function Hero() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const isMobile = useMediaQuery({ maxWidth: 767 });

	useGSAP(() => {
		const heroSplit = new SplitText(".title", { type: "chars, words" });
		const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

		heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.06,
		});

		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.06,
			delay: 1,
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#hero",
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			})
			.to(".right-leaf", { y: 200 }, 0)
			.to(".left-leaf", { y: -200 }, 0)
			.to(".arrow", { y: 100 }, 0);

		const startValue = isMobile ? "top 50%" : "center 60%";
		const endValue = isMobile ? "120% top" : "bottom top";

		const videoTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "video",
				start: startValue,
				end: endValue,
				scrub: true,
				pin: true,
			},
		});

		if (videoRef.current) {
			videoRef.current.onloadedmetadata = () => {
				videoTimeline.to(videoRef.current, {
					currentTime: videoRef.current?.duration,
				});
			};
		}
	}, []);

	return (
		<>
			<section id={"hero"} className="noisy">
				<h1 className="title">MOJITO</h1>
				<img
					src="/images/hero-left-leaf.png"
					alt="Left leaf"
					className="left-leaf"
				/>
				<img
					src="/images/hero-right-leaf.png"
					alt="Right leaf"
					className="right-leaf"
				/>
				<div className="body">
					<img src="/images/arrow.png" alt="arrow" className="arrow" />
					<div className="content">
						<div className="hidden md:block space-y-5">
							<p>Cool. Crisp. Classic.</p>
							<p className="subtitle">
								Sip the Spirit <br /> of Summer
							</p>
						</div>
						<div className="view-cocktails">
							<p className="subtitle">
								Every cocktail on our menu is a blend of premium ingredients,
								creative flair, and timeless recipes — designed to delight your
								senses.
							</p>
							<a href="#cocktails">View cocktails</a>
						</div>
					</div>
				</div>
			</section>
			<div className="absolute inset-0 video">
				<video
					ref={videoRef}
					src="/videos/output.mp4"
					preload="auto"
					muted
					playsInline
				/>
			</div>
		</>
	);
}

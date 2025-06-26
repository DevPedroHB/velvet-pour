import { menuCocktails } from "@/constants/menu-cocktails";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useRef } from "react";
import { useStateList } from "react-use";

export function Menu() {
	const contentRef = useRef<HTMLDivElement>(null);
	const { state, currentIndex, prev, next, setStateAt } =
		useStateList(menuCocktails);

	useGSAP(() => {
		gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
		gsap.fromTo(
			".cocktail img",
			{ opacity: 0, xPercent: -100 },
			{
				xPercent: 0,
				opacity: 1,
				duration: 1,
				ease: "power1.inOut",
			},
		);
		gsap.fromTo(
			".details h2",
			{ yPercent: 100, opacity: 0 },
			{
				yPercent: 0,
				opacity: 100,
				ease: "power1.inOut",
			},
		);
		gsap.fromTo(
			".details p",
			{ yPercent: 100, opacity: 0 },
			{
				yPercent: 0,
				opacity: 100,
				ease: "power1.inOut",
			},
		);
	}, [currentIndex]);

	const totalCocktails = menuCocktails.length;

	const getCocktailAt = useCallback(
		(indexOffset: number) => {
			return menuCocktails[
				(currentIndex + indexOffset + totalCocktails) % totalCocktails
			];
		},
		[currentIndex, totalCocktails],
	);

	const prevCocktail = getCocktailAt(-1);
	const nextCocktail = getCocktailAt(1);

	return (
		<section id={"menu"} aria-labelledby="menu-heading">
			<img
				id={"m-left-leaf"}
				src="/images/slider-left-leaf.png"
				alt="Left leaf"
			/>
			<img
				id={"m-right-leaf"}
				src="/images/slider-right-leaf.png"
				alt="Right leaf"
			/>
			<h2 id={"menu-heading"} className="sr-only">
				Cocktail Menu
			</h2>
			<nav className="cocktail-tabs" aria-label="Cocktail Navigation">
				{menuCocktails.map((cocktail, index) => {
					const isActive = index === currentIndex;

					return (
						<button
							type="button"
							key={cocktail.id}
							className={`
         ${
						isActive
							? "text-white border-white"
							: "text-white/50 border-white/50"
					}
        `}
							onClick={() => setStateAt(index)}
						>
							{cocktail.name}
						</button>
					);
				})}
			</nav>
			<div className="content">
				<div className="arrows">
					<button type="button" className="text-left" onClick={prev}>
						<span>{prevCocktail.name}</span>
						<img
							src="/images/right-arrow.png"
							alt="Right arrow"
							aria-hidden="true"
						/>
					</button>
					<button type="button" className="text-left" onClick={next}>
						<span>{nextCocktail.name}</span>
						<img
							src="/images/left-arrow.png"
							alt="Left arrow"
							aria-hidden="true"
						/>
					</button>
				</div>
				<div className="cocktail">
					<img
						src={state.image}
						alt={nextCocktail.name}
						className="object-contain"
					/>
				</div>
				<div className="recipe">
					<div ref={contentRef} className="info">
						<p>Recipe for:</p>
						<p id={"title"}>{state.name}</p>
					</div>
					<div className="details">
						<h2>{state.title}</h2>
						<p>{state.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

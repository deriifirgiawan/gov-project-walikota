import { ISectionParallaxProps } from "./SectionParallax.interface";

export const SectionParallax = (_props: ISectionParallaxProps) => {
	const { title, backgroundUrl, children } = _props;
	return (
		<section>
			<div className="relative overflow-hidden">
				<div
					className="parallax h-full w-full absolute top-0 left-0 z-0"
					style={{ backgroundImage: `url(${backgroundUrl})` }}
				></div>

				<div className="relative z-10 text-white p-4 md:p-8 lg:p-8">
					<h2 className="text-center text-white font-bold text-2xl md:text-4xl mb-4 mx-auto">
						{title}
					</h2>
					{children}
				</div>
			</div>
		</section>
	);
};

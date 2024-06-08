import { ImageConstant } from "@/constants";
import { HomeData } from "@/data";
import { SectionParallax } from "../../SectionParallax";

export const SectionVideo = () => {
	const { videos } = HomeData;
	return (
		<SectionParallax
			title="Walikota.AI Video"
			backgroundUrl={ImageConstant.BACKGROUND_VIDEO}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
				{videos.map((value) => (
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-once="true"
						key={value.id}
						className="hover:cursor-pointer"
					>
						<div className="bg-slate-200 h-[295px] rounded-lg mb-4 shadow-md" />
						<h2 className="text-base font-bold drop-shadow-md">
							{value.title}
						</h2>
					</div>
				))}
			</div>
		</SectionParallax>
	);
};

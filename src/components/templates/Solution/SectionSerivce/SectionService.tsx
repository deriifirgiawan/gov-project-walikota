import { solutionData } from "@/data";
import { SectionParallax } from "../../SectionParallax";
import { ImageConstant } from "@/constants";
import { Card } from "../Card";
import Image from "next/image";

export const SectionService = () => {
	const { dataPendukung } = solutionData;
	return (
		<SectionParallax
			title={dataPendukung.title}
			backgroundUrl={ImageConstant.BACKGROUND_DATA}
		>
			{dataPendukung.list.map((value) => (
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-once="true"
					key={`${value.id}/${value.title}`}
					className="flex items-center justify-center md:justify-center lg:justify-evenly flex-col md:flex-col lg:flex-row gap-4 mt-12 mb-8"
				>
					<Image src={value.image} alt={value.title} width={384} height={384} />
					<Card title={value.title} list={value.list} />
				</div>
			))}
		</SectionParallax>
	);
};

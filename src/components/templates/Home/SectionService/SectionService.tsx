"use client";
import { ReactNode } from "react";
import { HomeData } from "@/data";
import Image from "next/image";

interface Props {
	children?: ReactNode;
}
export const SectionService = (_props: Props) => {
	const { children } = _props;
	const { services } = HomeData;
	return (
		<section className="grad-feat py-8 md:py-12 lg:py-16 px-8">
			<div className="flex flex-col md:flex-row lg:flex-row flex-wrap items-center justify-center">
				{services.map((value) => (
					<div
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-once="true"
						key={value}
						className="w-full md:w-6/12 lg:w-3/12 px-2 md:px-4 mb-6 lg:mb-8"
					>
						<Image
							src={value}
							alt={value}
							className="w-full h-full object-cover"
							width={389}
							height={389}
						/>
					</div>
				))}
			</div>
			{children}
		</section>
	);
};

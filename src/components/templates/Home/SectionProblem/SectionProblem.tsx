"use client";
import { HomeData } from "@/data";
import Image from "next/image";

export const SectionProblem = () => {
	const { problem } = HomeData;
	return (
		<section className="bg-[#f14279] bg-opacity-5 px-4 md:px-8 lg:px-8 py-4 md:py-8 lg:py-8">
			<h2 className="font-bold text-2xl md:text-4xl lg:text-4xl text-center">
				{problem.title}
			</h2>

			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-4 sm:pt-6 lg:pt-8">
				{problem.list.map((value, index) => (
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-once="true"
						key={index}
						className="rounded-2xl grad-prob shadow-xl hover:shadow-2xl transition duration-200 ease-in-out p-4 md:p-8 flex gap-8 items-center"
					>
						<Image
							className="w-[98px] md:w-[155px] lg:w-[155px] h-[124px] md:h-[168px] lg:h-[168px]"
							src="/icons/icon-problem-01.webp"
							width={155}
							height={188}
							alt="Problem"
						/>
						<div className="text-white">
							<h3 className="font-bold text-xl md:text-2xl mb-4 md:[1rem] lg:mr-[12rem]">
								{value?.title}
							</h3>
							<p>{value?.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

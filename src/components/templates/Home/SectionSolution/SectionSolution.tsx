import { HomeData } from "@/data";
import Image from "next/image";

export const SectionSolution = () => {
	const { solutions } = HomeData;
	return (
		<section className="bg-white p-4 md:p-8 lg:p-8">
			<h2 className="font-bold text-2xl md:text-4xl lg:text-4xl text-center">
				{solutions.title}
			</h2>

			<div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-4 sm:pt-6 lg:pt-8 mb-4">
				{solutions.list.slice(0, 3).map((value, index) => (
					<div
						key={index}
						className="transition duration-200 ease-in-out p-4 md:p-8 flex flex-col justify-center text-center gap-8 items-center"
					>
						<Image
							className="w-[200pxx] md:w-[200px] lg:w-[200px] h-[124px] md:h-[168px] lg:h-[168px]"
							src={value.image}
							width={155}
							height={188}
							alt="Problem"
						/>
						<div className="text-black">
							<h3 className="text-xl font-bold mb-4 text-center mx-0rem md:[2rem] lg:mx-[2rem]">
								{value?.title}
							</h3>
							<p>{value?.description}</p>
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-center items-center">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
					{solutions.list.slice(3, 5).map((value, index) => (
						<div
							data-aos="fade-up"
							data-aos-duration="2000"
							data-aos-once="true"
							key={index}
							className="transition duration-200 ease-in-out p-4 md:p-8 flex flex-col justify-center text-center gap-8 items-center col-span-2 sm:col-span-1"
						>
							<Image
								className={`${
									index === 1
										? "w-[300px] md:w-[300px] lg:w-[300px] h-[124px] md:h-[168px] lg:h-[168px]"
										: "w-[98px] md:w-[155px] lg:w-[155px] h-[124px] md:h-[168px] lg:h-[168px]"
								}`}
								src={value.image}
								width={index === 1 ? 600 : 155}
								height={188}
								alt="Problem"
							/>
							<div className="text-black">
								<h3 className="text-xl font-bold mb-4 text-center mx-0rem md:[2rem] lg:mx-[2rem]">
									{value?.title}
									{index}
								</h3>
								<p className="mx-[0rem] md:mx-[4rem] lg:mx-[4rem]">
									{value?.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

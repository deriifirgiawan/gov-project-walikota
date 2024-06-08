import { metodologiData } from "@/data";
import Image from "next/image";

export const SectionService = () => {
	const { listMetodologi } = metodologiData;
	return (
		<section className="grad-feat py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-72">
			<h1 className="font-bold text-2xl md:text-4xl lg:text-4xl">
				{listMetodologi.title}
			</h1>

			{listMetodologi.list.map((value, index) => (
				<div
					key={`/${value.id}/${value.subtitle}`}
					className={`flex gap-4 items-center mb-8 mt-4 md:mt-20 lg:mt-20 flex-col-reverse md:flex-row lg:flex-row ${
						index === 1 && "flex-row-reverse"
					}`}
				>
					<div className="w-full md:w-1/2 lg:w-1/2">
						<p className={`font-semibold `}>{value.subtitle}</p>
						<div className="flex gap-4 mt-10 justify-center md:justify-start lg:justify-start">
							{value.listIcons.length !== 0 &&
								value.listIcons.map((item) => (
									<div
										key={item.icon}
										className="text-center flex items-center flex-col"
									>
										<Image
											className="w-[96px] h-[96px]"
											width={96}
											height={96}
											src={item.icon}
											alt={item.title}
										/>
										<p className="mt-4">{item.title}</p>
									</div>
								))}
						</div>
					</div>
					<Image
						className="w-full md:w-1/2 px-4"
						src={value.imageUrl}
						alt={listMetodologi.title}
						width={368}
						height={226}
					/>
				</div>
			))}
		</section>
	);
};

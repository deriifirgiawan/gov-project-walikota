import { HomeData } from "@/data";

export const SectionArticle = () => {
	const { articles } = HomeData;
	return (
		<section className="bg-white p-4 md:p-8 lg:p-8">
			<h2 className="font-bold text-2xl md:text-4xl lg:text-4xl text-center">
				{articles.title}
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
				{articles.list.map((value) => (
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
		</section>
	);
};

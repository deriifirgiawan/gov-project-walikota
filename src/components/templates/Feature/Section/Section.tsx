import { Button } from "@/components/ui/button";
import { ISectionProps } from "./Section.interface";
import { CircleArrowDown } from "lucide-react";

export const Section = (_props: ISectionProps) => {
	const { children, data } = _props;
	return (
		<section className="px-0 md:px-8 lg:px-8 mt-24">
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-once="true"
				className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between"
			>
				<div className="w-full md:w-2/5 lg:w-2/5 mt-4 md:mt-0 lg:mt-0">
					<h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase">
						{data?.title}
					</h2>
					<h4 className="text-xl mb-4 md:mb-8">{data?.subtitle}</h4>
					<Button className="font-bold bg-[#EF5133]">
						Lihat Selengkapnya <CircleArrowDown className="ml-2" />
					</Button>
				</div>
				<div className="bg-slate-200 w-full md:w-1/2 h-[300px] rounded-lg" />
			</div>
			{children}
		</section>
	);
};

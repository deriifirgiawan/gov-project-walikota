import { MainLayout } from "@/components/Layouts";
import { Carousel } from "@/components/templates";
import { ImageConstant } from "@/constants";
import Image from "next/image";

const {
	HOW_TO_1,
	HOW_TO_2,
	HOW_TO_3,
	HOW_TO_4,
	HOW_TO_5,
	HOW_TO_10,
	HOW_TO_11,
	HOW_TO_12,
	HOW_TO_6,
	HOW_TO_9,
	HOW_TO_7,
	HOW_TO_8,
} = ImageConstant;
export default function HowToPage() {
	const listImages = [
		HOW_TO_1,
		HOW_TO_2,
		HOW_TO_3,
		HOW_TO_4,
		HOW_TO_5,
		HOW_TO_6,
		HOW_TO_7,
		HOW_TO_8,
		HOW_TO_9,
		HOW_TO_10,
		HOW_TO_11,
		HOW_TO_12,
	];
	return (
		<MainLayout>
			<Carousel.SectionBanner contentType="how-to" />
			<div className="p-8 flex flex-col justify-center items-center">
				<h1 className="font-bold text-center text-2xl md:text-4xl lg:text-4xl">
					Alur Penggunaan Dashboard dan Fitur Walikota.AI
				</h1>

				<div className="mt-8 grid grid-cols-2">
					{listImages.map((value) => (
						<div key={value}>
							<Image src={value} alt="Ho To" width={384} height={384} />
						</div>
					))}
				</div>
			</div>
		</MainLayout>
	);
}

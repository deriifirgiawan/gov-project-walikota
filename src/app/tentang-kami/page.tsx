import { MainLayout } from "@/components/Layouts";
import { Carousel } from "@/components/templates";
import { aboutData } from "@/data";

export default function AboutPage() {
	return (
		<MainLayout>
			<Carousel.SectionBanner contentType="tentang-kami" />
			<div className="p-8">
				<article className="max-w-screen-sm mx-auto">
					<h1 className="text-2xl md:text-4xl lg:text-4xl font-bold">
						{aboutData.title}
					</h1>

					<p className="mt-8">{aboutData.paragraph1}</p>

					<p className="mt-4">{aboutData.paragraph2}</p>
					<p className="mt-4">{aboutData.paragraph3}</p>
					<p className="mt-4">{aboutData.paragraph4}</p>
				</article>
			</div>
		</MainLayout>
	);
}

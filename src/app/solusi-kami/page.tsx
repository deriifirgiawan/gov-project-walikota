import { MainLayout } from "@/components/Layouts";
import { Carousel, Home, Solution } from "@/components/templates";

export default function SolutionPage() {
	return (
		<MainLayout>
			<Carousel.SectionBanner contentType="solusi-kami" />
			<Home.SectionSolution />
			<Solution.SectionService />
		</MainLayout>
	);
}

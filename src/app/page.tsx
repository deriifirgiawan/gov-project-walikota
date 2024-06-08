import { MainLayout } from "@/components/Layouts";
import { Carousel, Home } from "@/components/templates";

export default function HomePage() {
	return (
		<MainLayout>
			<Carousel.SectionBanner />
			<Home.SectionProblem />
			<Home.SectionSolution />
			<Home.SectionService />
			<Home.SectionVideo />
			<Home.SectionArticle />
		</MainLayout>
	);
}

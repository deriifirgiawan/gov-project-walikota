import { MainLayout } from "@/components/Layouts";
import { Carousel, Metodologi } from "@/components/templates";

export default function MetodologiPage() {
	return (
		<MainLayout>
			<Carousel.SectionBanner contentType="metodologi" />
			<Metodologi.SectionService />
		</MainLayout>
	);
}

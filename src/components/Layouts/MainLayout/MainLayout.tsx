import { Footer, Main } from "@/components/templates";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const MainLayout = (_props: Props) => {
	const { children } = _props;

	return (
		<main>
			<Main.Navbar />
			{children}
			<Footer />
		</main>
	);
};

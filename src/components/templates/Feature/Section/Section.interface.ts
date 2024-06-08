import { ReactNode } from "react";

export interface ISectionProps {
	typeContent:
		| "data-politik"
		| "data-sosial"
		| "data-demografi"
		| "data-dinamis"
		| "rekomendasi-strategi"
		| "komunikasi-kampanye"
		| "desain-apk"
		| "manajemen-timses";
	type: "time-line" | "none";

	children?: ReactNode;

	data?: {
		title: string;
		subtitle: string;
		imageUrl?: string;
	};

	dataTimeLine?: {
		title: string;
		subtitle: string;
		sourceUrl?: string;
		type: string;
		detailFitur: {
			title: string;
			subtitle: string;

			list: {
				id: number;
				title: string;
				subtitle: string;
				imageUrl?: string;
			}[];
		};
	};
}

import { ImageConstant } from "@/constants";

const {
	ICON_METODOLOGI_1,
	ICON_METODOLOGI_2,
	ICON_KPU,
	ICON_BPS,
	ICON_KEMENDAG,
} = ImageConstant;
export const metodologiData = {
	title: "Strategi Kampanye Politik Cerdas dengan AI",
	listMetodologi: {
		title: "Metodologi",
		list: [
			{
				id: 1,
				subtitle:
					"Teknologi AI kami, dilatih menggunakan data politik, data demografi, data psikografi dari sumber yang kredibel:",
				imageUrl: ICON_METODOLOGI_1,
				listIcons: [
					{
						id: 1,
						icon: ICON_KPU,
						title: "KPU",
					},
					{
						id: 2,
						icon: ICON_BPS,
						title: "BPS",
					},
					{
						id: 3,
						icon: ICON_KEMENDAG,
						title: "Kemendagri",
					},
				],
			},
			{
				id: 1,
				subtitle:
					"Beserta data pendukung yang menggambarkan potensi pemilih muda di 2024 dari Media Sosial dan Media Online",
				imageUrl: ICON_METODOLOGI_2,
				listIcons: [],
			},
		],
	},
};

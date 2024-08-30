import { INavData } from "@/interfaces";

export const navMenuData: INavData[] = [
	{
		id: 1,
		name: "Solusi Kami",
		slug: "solusi-kami",
		type: "navigate",
	},
	{
		id: 2,
		name: "Fitur Lengkap",
		slug: "fitur-lengkap",
		type: "dropdown",
		subLink: [
			{
				id: 1,
				name: "Data Politik",
				slug: "#data-politik",
			},
			{
				id: 2,
				name: "Data Sosial Ekonomi",
				slug: "#data-sosial-ekonomi",
			},
			{
				id: 3,
				name: "Data Sosial Media",
				slug: "#data-sosial-media",
			},
			{
				id: 4,
				name: "Data Dinamis",
				slug: "#data-dinamis",
			},
			{
				id: 5,
				name: "Rekomendasi Strategi",
				slug: "#rekomendasi-strategi",
			},
			{
				id: 6,
				name: "Komunikasi Kampanye",
				slug: "#komunikasi-kampanye",
			},
			{
				id: 7,
				name: "Desain APK",
				slug: "#desain-apk",
			},
			{
				id: 8,
				name: "Aplikasi Timses",
				slug: "#aplikasi-timses",
			},
		],
	},
	{
		id: 3,
		name: "Metodologi",
		slug: "metodologi",
		type: "navigate",
	},
	{
		id: 4,
		name: "How To",
		slug: "how-to",
		type: "dropdown",
		subLink: [
			{
				id: 1,
				name: "Alur Berlangganan dan Pembayaran",
				slug: "#alur-berlangganan-dan-pembayaran",
			},
			{
				id: 2,
				name: "Alur Penggunan Dashboard dan Fitur Walikota.AI",
				slug: "#alur-penggunaan",
			},
			{
				id: 3,
				name: "Alur Penggunaan Dashboard Monev untuk Kandidat Relawan",
				slug: "#data-sosial-media",
			},
		],
	},
	{
		id: 5,
		name: "Artikel",
		slug: "artikel",
		type: "navigate",
	},
	{
		id: 6,
		name: "Tentang Kami",
		slug: "tentang-kami",
		type: "navigate",
	},
];

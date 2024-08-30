import { ImageConstant } from "@/constants";

const {
	SERVICE_DATA_POLITICS,
	SERVICE_DATA_DEMOGRAFI,
	SERVICE_DATA_DYNAMIC,
	SERVICE_DATA_SOCIAL_ECONOMY,
	SERVICE_MANAGEMENT,
	SERVICE_RECOMMEND,
	SERVICE_RECOMMEND_CAMPAIGN,
	SEVICE_DESIGN_APK,
	ICON_FACEBOOK,
	ICON_INSTAGRAM,
	ICON_LINKEDIN,
	ICON_TWITTER,
	ICON_YOUTUBE,
	ICON_TIKTOK,
	ICON_TARGET,
	ICON_DATA,
	ICON_TPS,
	ICON_PEOPLE,
	ICON_TIME,
} = ImageConstant;
export const HomeData = {
	title: "Selamat Datang di Walikota.AI",
	subtitle:
		"Memanfaatkan Artificial Intelligence dan big data untuk memberikan solusi bagi para calon Wali Kota dalam meningkatkan efektivitas kampanye mereka melalui pengumpulan dan analisis data politik yang akurat dan komprehensif.",

	problem: {
		title: "Permasalahan Ketika Pemilu",
		list: [
			{
				id: 1,
				title: "Alokasi Anggaran Yang Membengkak",
				description:
					"Kandidat kerap kali kesulitan mengontrol anggaran yang disiapkan karena kondisi lapangan yang sangat dinamis.",
			},
			{
				id: 2,
				title: "Persaingan Yang Kompetitif",
				description:
					"Kandidat kerap kali kesulitan mempertahankan basis suara dan memetakan potensi suara yang bisa diraih.",
			},
			,
			{
				id: 3,
				title: "Kebutuhan Konstituen Yang Beragam",
				description:
					"Kandidat kerap kali kesulitan memahami kebutuhan konstituen karena keterbatasan data hingga isu terkini di dapil.",
			},
			,
			{
				id: 4,
				title: "Manajemen Timses Yang Rumit",
				description:
					"Kandidat kerap kali kesulitan memantau pergerakan timses dan validasi hasil pekerjaan timses dilakukan secara manual.",
			},
		],
	},

	solutions: {
		id: "",
		title: "Solusi yang Kami Tawarkan",
		list: [
			{
				id: 1,
				title: "Optimalisasi Waktu dan Anggaran Kampanye",
				description:
					"Big data berbasis teknologi Artificial Intelligence yang memberikan data secara komprehensif dan akurat.",
				image: ICON_TIME,
			},
			{
				id: 2,
				title: "Strategi Penargetan Mikro",
				description:
					"Menampilkan peta politik, sosial, dan ekonomi, daerah pemilihan Anda secara rinci.",
				image: ICON_TARGET,
			},

			{
				id: 3,
				title: "Menyediakan Data Pemilih Potensial Nasional",
				description: "Dapatkan analisis potensi suara, hingga level TPS.",
				image: ICON_DATA,
			},
			{
				id: 4,
				title: "Personalisasi Strategi Kampanye",
				description:
					"Dapatkan strategi personal untuk kampanye nano targeting.",
				image: ICON_PEOPLE,
			},
			{
				id: 5,
				title: "Rekomendasi TPS Prioritas",
				description:
					"Dapatkan 3 kategori rekomendasi TPS. Mulai dari TPS bertahan, TPS serang hingga TPS gerilya.",
				image: ICON_TPS,
			},
		],
	},
	services: [
		SERVICE_DATA_POLITICS,
		SERVICE_DATA_SOCIAL_ECONOMY,
		SERVICE_DATA_DEMOGRAFI,
		SERVICE_DATA_DYNAMIC,
		SERVICE_RECOMMEND,
		SERVICE_RECOMMEND_CAMPAIGN,
		SEVICE_DESIGN_APK,
		SERVICE_MANAGEMENT,
	],

	videos: [
		{
			id: 1,
			title: "Tentang Walikota.AI",
		},
		{
			id: 2,
			title: "Video Panduan Penggunaan Dashboard Walikota.AI",
		},
		{
			id: 3,
			title: "Video Panduan Penggunaan Mobile Apps Timses Walikota.AI",
		},
		{
			id: 4,
			title: "Video Panduan Penggunaan Dashboard Monev Kandidat Walikota.AI",
		},
		{
			id: 5,
			title: "Fitur Baru Walikota.AI: Rekomendasi TPS Prioritas",
		},
		{
			id: 6,
			title: "Tutorial Penggunaan Platform Desain APK",
		},
		{
			id: 7,
			title: "Tutoral Berlangganan",
		},
		{
			id: 8,
			title: "Tutorial Menampilkan Data",
		},
		{
			id: 9,
			title: "Tutorial Fitur Strategi",
		},
		{
			id: 10,
			title: "Tutorial Pendaftaran",
		},
	],

	articles: {
		title: "Artikel Terbaru",
		list: [
			{
				id: 1,
				title: "Peran Teknologi AI di Pilpres-Pileg, Ancaman Atau Kemudahan ?",
			},
			{
				id: 2,
				title: "Peran Teknologi AI di Pilpres-Pileg, Ancaman Atau Kemudahan ?",
			},
			{
				id: 3,
				title: "Peran Teknologi AI di Pilpres-Pileg, Ancaman Atau Kemudahan ?",
			},
			{
				id: 4,
				title: "Peran Teknologi AI di Pilpres-Pileg, Ancaman Atau Kemudahan ?",
			},
			{
				id: 5,
				title: "Peran Teknologi AI di Pilpres-Pileg, Ancaman Atau Kemudahan ?",
			},
			{
				id: 6,
				title: "Peran Teknologi AI di Pilpres-Pileg, Ancaman Atau Kemudahan ?",
			},
		],
	},

	socialMedia: [
		{
			id: 1,
			icon: ICON_FACEBOOK,
			url: "#",
			title: "Facebook",
		},
		{
			id: 2,
			icon: ICON_TWITTER,
			url: "#",
			title: "Twitter",
		},
		{
			id: 3,
			icon: ICON_INSTAGRAM,
			url: "#",
			title: "Instagram",
		},
		{
			id: 4,
			icon: ICON_LINKEDIN,
			url: "#",
			title: "Linkedin",
		},
		{
			id: 5,
			icon: ICON_YOUTUBE,
			url: "#",
			title: "YouTube",
		},
		{
			id: 6,
			icon: ICON_TIKTOK,
			url: "#",
			title: "Tiktok",
		},
	],
};

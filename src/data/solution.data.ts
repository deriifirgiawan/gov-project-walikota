import { ImageConstant } from "@/constants";

const {
	ICON_DATA_DEMOGRAFI,
	ICON_DATA_SOCIAL,
	ICON_DATA_EKONOMI,
	ICON_DATA_POLITIK,
	ICON_DATA_DINAMIS,
} = ImageConstant;
export const solutionData = {
	title: "Dengan Walikota.AI kamu bisa mendapatkan",
	subtitles: [
		"Naskah Kampanye",
		"Rekomendasi Strategi",
		"Micro Strategi",
		"Desain APK",
		"Aplikasi Manajemen Tim",
		"Peta Politik Dapil",
		"Peta Ekonomi Dapil",
		"Peta Sosial Dapil",
	],

	dataPendukung: {
		title: "Data Pendukung Kemenangan Anda",

		list: [
			{
				id: 1,
				title: "Data Demografi",
				image: ICON_DATA_DEMOGRAFI,
				list: [
					{
						id: 1,
						title:
							"Jumlah pemilih berdasarkan jenis kelamin pada level Kecamatan",
					},
					{
						id: 2,
						title: "Jumlah pemilih berdasarkan usia pada level kecamatan",
					},
					{
						id: 3,
						title: "Jumlah pemilih berdasarkan agama pada level kecamatan",
					},
					{
						id: 4,
						title: "Jumlah pemilih berdasarkan etnis pada level kecamatan",
					},
				],
			},

			{
				id: 2,
				title: "Data Sosial",
				image: ICON_DATA_SOCIAL,
				list: [
					{
						id: 1,
						title: "Data Fasilitas Pendidikan",
					},
					{
						id: 2,
						title: "Data Kelompok Pendidikan",
					},
					{
						id: 3,
						title: "Data Rumah Ibadah",
					},
					{
						id: 4,
						title: "Data Kelompok Masyarakat",
					},
				],
			},

			{
				id: 3,
				title: "Data Politik",
				image: ICON_DATA_POLITIK,
				list: [
					{
						id: 1,
						title:
							"Jumlah Suara partai politik di DPR RI, DPRD Provinsi, DPRD Kab/Kota pada level kecamatan",
					},
					{
						id: 2,
						title:
							"Jumlah persebaran kursi partai politik di DPR RI, DPRD Provinsi, DPRD Kab/Kota pada level dapil",
					},
					{
						id: 3,
						title:
							"Jumlah Suara capres dan cawapres di Pilpres 2019 pada level kecamatan",
					},
					{
						id: 4,
						title:
							"Data voters turnout di Pilpres, Pileg, DPR RI, Pileg DPRD Provinsi, Pileg DPRD Kab/Kota",
					},
					{
						id: 5,
						title: "Data party id pada level kecamatan",
					},
					{
						id: 6,
						title:
							"Data prefensi pemilih (split/solid voters) pada level kecamatan",
					},
				],
			},
			{
				id: 4,
				title: "Data Ekonomi",
				image: ICON_DATA_EKONOMI,
				list: [
					{
						id: 1,
						title: "Data Pertumbuhan Ekonomi",
					},
					{
						id: 2,
						title: "Data Infrasturktur Desa",
					},
					{
						id: 3,
						title: "Data Akses Finansial",
					},
					{
						id: 4,
						title: "Data Akses Internet",
					},
					{
						id: 5,
						title: "Data Pengangguran",
					},
					{
						id: 6,
						title: "Data Serapan Tenaga Kerja",
					},
					{
						id: 7,
						title: "Data Penerima Bantuan Sosial",
					},
				],
			},
			{
				id: 5,
				title: "Data Dinamis",
				image: ICON_DATA_DINAMIS,
				list: [
					{
						id: 1,
						title: "Media Sosial",
					},
					{
						id: 2,
						title: "Media Online",
					},
				],
			},
		],
	},
};

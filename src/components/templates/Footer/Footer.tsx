import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageConstant } from "@/constants";
import { HomeData } from "@/data";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	const { socialMedia } = HomeData;
	return (
		<footer className="bg-blue-50  p-4 md:p-8 lg:p-8">
			<section className="w-full flex flex-col md:flex-col lg:flex-row justify-between gap-4 mb-8">
				<div className="md:w-6/12 lg:w-6/12">
					<h4 className="text-xl md:text-3xl mb-4 text-blue-600">
						Sekilas Tentang Kami
					</h4>
					<p className="md:mr-[10rem] lg:mr-[10rem] mr-0 mb-4">
						Walikota.AI memanfaatkan Artificial Intelligence dan big data untuk
						memberikan solusi bagi para calon legislatif dalam meningkatkan
						efektivitas kampanye mereka melalui pengumpulan dan analisis data
						politik yang akurat dan komprehensif.
					</p>

					<Button
						variant="outline"
						className="border-2 uppercase border-blue-600 hover:border-[#F04279] bg-transparent hover:bg-transparent font-bold text-blue-600 hover:text-[#F04279] rounded-full"
					>
						Lebih Lanjut
						<span className="ml-2">
							<MoveRight />
						</span>
					</Button>
				</div>

				<div className="md:w-6/12 lg:w-6/12">
					<h4 className="text-xl md:text-3xl mb-4 text-blue-600">
						Hubungi Kami
					</h4>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
						<div className="sm:col-span-1">
							<Input placeholder="Nama Lengkap" />
						</div>
						<div className="sm:col-span-1">
							<Input placeholder="Alamat Email" />
						</div>

						<div className="sm:col-span-2">
							<textarea
								className="w-full p-2 border border-blue-300 rounded-md"
								placeholder="Pesan"
							></textarea>
						</div>
					</div>
					<Button className="bg-blue-600 hover:bg-[#F04279] font-bold text-white uppercase">
						kirim
					</Button>
				</div>
			</section>

			<section className="w-full border-t-2 border-t-blue-600 pt-4">
				<p>Copyright © 2023 Walikota.AI - All rights reserved.</p>
				<div className="flex items-center mt-2">
					<Link href="#">
						<div className="border-r-2 pr-2">
							<p>Kebijakan Privasi</p>
						</div>
					</Link>

					<Link href="#">
						<div className="border-r-2 px-2">
							<p>Syarat Dan Ketentuan</p>
						</div>
					</Link>

					<Link href="#">
						<div className="px-2 flex items-center gap-2">
							<Image
								src={ImageConstant.ICON_PLAYSTORE}
								alt="Download"
								width={16}
								height={16}
							/>
							<p>Download Aplikasi Kami</p>
						</div>
					</Link>
				</div>

				<div className="flex gap-2 items-center mt-8 justify-center md:justify-start lg:justify-start">
					{socialMedia.map((value) => (
						<Link key={value.icon} href={value.url}>
							<Image
								src={value.icon}
								alt={value.title}
								width={32}
								height={32}
							/>
						</Link>
					))}
				</div>
			</section>
		</footer>
	);
};

import { MainLayout } from "@/components/Layouts";
import { Feature, Home } from "@/components/templates";
import { featureData } from "@/data";

export default function FeaturePage() {
	const {
		dataPolitik,
		dataSosial,
		dataDemografi,
		dataMediaOnline,
		rekomendasi_strategi,
		komunitas_kampanye,
		design_apk,
		apliksi_timses,
	} = featureData;
	return (
		<MainLayout>
			<Home.SectionService>
				<Feature.Section
					type="time-line"
					typeContent="data-politik"
					data={dataPolitik}
					dataTimeLine={dataPolitik}
				>
					<div
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-once="true"
						className="flex flex-col justify-center items-center text-center mt-24 w-full"
					>
						<h3 className="text-2xl md:text-4xl font-bold mb-4">
							Detail Fitur
						</h3>
						<p className="font-semibold text-base mx-0 md:mx-[12rem] lg:mx-[12rem]">
							{dataPolitik.detailFitur.subtitle}
						</p>
					</div>
					<ul className="relative border-l-[8px] md:border-l-[12px] lg:border-l-[12px] border-[#EF5133] mt-24">
						{dataPolitik.detailFitur.list.map((value) => (
							<li
								data-aos="fade-up"
								data-aos-duration="500"
								data-aos-once="true"
								key={value.subtitle}
								className="flex flex-wrap md:justify-between py-6 md:py-12 relative"
							>
								<div className="absolute w-[32px] h-[32px] md:w-[64px] md:h-[64px] lg:w-[65px] lg:h-[64px] bg-[#EF5133] rounded-full mt-1.5 -start-5 md:-start-9 lg:-start-9"></div>
								<div className="flex flex-col md:flex-row lg:flex-row justify-start md:justify-between lg:justify-between ml-6 md:ml-12 lg:ml-12 w-full">
									<div className="w-full md:w-1/2 lg:w-1/2">
										<h3 className="text-xl md:text-3xl mb-4 font-bold">
											{value.title}
										</h3>
										<p className="text-sm md:text-base">{value.subtitle}</p>
									</div>
									<div className="bg-slate-200 w-full md:w-[503px] lg:w-[503px] h-[311px] rounded-lg mt-4 md:mt-0 lg:mt-0" />
								</div>
							</li>
						))}
					</ul>
				</Feature.Section>

				<Feature.Section
					type="time-line"
					typeContent="data-sosial"
					data={dataSosial}
				>
					<div
						data-aos="fade-up"
						data-aos-duration="500"
						data-aos-once="true"
						className="flex flex-col justify-center items-center text-center mt-24 w-full"
					>
						<h3 className="text-2xl md:text-4xl font-bold mb-4">
							Detail Fitur
						</h3>
						<p className="font-semibold text-base mx-0 md:mx-[12rem] lg:mx-[12rem]">
							{dataSosial.detailFitur.subtitle}
						</p>
					</div>
					<ul className="relative border-l-[8px] md:border-l-[12px] lg:border-l-[12px] border-[#EF5133] mt-24">
						{dataSosial.detailFitur.list.map((value) => (
							<li
								data-aos="fade-up"
								data-aos-duration="500"
								data-aos-once="true"
								key={value.subtitle}
								className="flex flex-wrap md:justify-between py-6 md:py-12 relative"
							>
								<div className="absolute w-[32px] h-[32px] md:w-[64px] md:h-[64px] lg:w-[65px] lg:h-[64px] bg-[#EF5133] rounded-full mt-1.5 -start-5 md:-start-9 lg:-start-9"></div>
								<div className="flex flex-col md:flex-row lg:flex-row justify-start md:justify-between lg:justify-between ml-6 md:ml-12 lg:ml-12 w-full">
									<div className="w-full md:w-1/2 lg:w-1/2">
										<h3 className="text-xl md:text-3xl mb-4 font-bold">
											{value.title}
										</h3>
										<p className="text-sm md:text-base">{value.subtitle}</p>
									</div>
									<div className="bg-slate-200 w-full md:w-[503px] lg:w-[503px] h-[311px] rounded-lg mt-4 md:mt-0 lg:mt-0" />
								</div>
							</li>
						))}
					</ul>
				</Feature.Section>

				<Feature.Section
					type="none"
					typeContent="data-demografi"
					data={dataDemografi}
				/>

				<Feature.Section
					type="none"
					typeContent="data-dinamis"
					data={dataMediaOnline}
				/>

				<Feature.Section
					type="time-line"
					typeContent="rekomendasi-strategi"
					data={rekomendasi_strategi}
				>
					<div
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-once="true"
						className="flex flex-col justify-center items-center text-center mt-24 w-full"
					>
						<h3 className="text-2xl md:text-4xl font-bold mb-4">
							Detail Fitur
						</h3>
						<p className="font-semibold text-base mx-0 md:mx-[12rem] lg:mx-[12rem]">
							{rekomendasi_strategi.detailFitur.subtitle}
						</p>
					</div>
					<ul className="relative border-l-[8px] md:border-l-[12px] lg:border-l-[12px] border-[#EF5133] mt-24">
						{rekomendasi_strategi.detailFitur.list.map((value) => (
							<li
								data-aos="fade-up"
								data-aos-duration="500"
								data-aos-once="true"
								key={value.subtitle}
								className="flex flex-wrap md:justify-between py-6 md:py-12 relative"
							>
								<div className="absolute w-[32px] h-[32px] md:w-[64px] md:h-[64px] lg:w-[65px] lg:h-[64px] bg-[#EF5133] rounded-full mt-1.5 -start-5 md:-start-9 lg:-start-9"></div>
								<div className="flex flex-col md:flex-row lg:flex-row justify-start md:justify-between lg:justify-between ml-6 md:ml-12 lg:ml-12 w-full">
									<div className="w-full md:w-1/2 lg:w-1/2">
										<h3 className="text-xl md:text-3xl mb-4 font-bold">
											{value.title}
										</h3>
										<p className="text-sm md:text-base">{value.subtitle}</p>
									</div>
									<div className="bg-slate-200 w-full md:w-[503px] lg:w-[503px] h-[311px] rounded-lg mt-4 md:mt-0 lg:mt-0" />
								</div>
							</li>
						))}
					</ul>
				</Feature.Section>

				<Feature.Section
					type="time-line"
					typeContent="komunikasi-kampanye"
					data={komunitas_kampanye}
				>
					<div
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-once="true"
						className="flex flex-col justify-center items-center text-center mt-24 w-full"
					>
						<h3 className="text-2xl md:text-4xl font-bold mb-4">
							Detail Fitur
						</h3>
						<p className="font-semibold text-base mx-0 md:mx-[12rem] lg:mx-[12rem]">
							{komunitas_kampanye.detailFitur.subtitle}
						</p>
					</div>
					<ul className="relative border-l-[8px] md:border-l-[12px] lg:border-l-[12px] border-[#EF5133] mt-24">
						{komunitas_kampanye.detailFitur.list.map((value) => (
							<li
								data-aos="fade-up"
								data-aos-duration="500"
								data-aos-once="true"
								key={value.subtitle}
								className="flex flex-wrap md:justify-between py-6 md:py-12 relative"
							>
								<div className="absolute w-[32px] h-[32px] md:w-[64px] md:h-[64px] lg:w-[65px] lg:h-[64px] bg-[#EF5133] rounded-full mt-1.5 -start-5 md:-start-9 lg:-start-9"></div>
								<div className="flex flex-col md:flex-row lg:flex-row justify-start md:justify-between lg:justify-between ml-6 md:ml-12 lg:ml-12 w-full">
									<div className="w-full md:w-1/2 lg:w-1/2">
										<h3 className="text-xl md:text-3xl mb-4 font-bold">
											{value.title}
										</h3>
										<p className="text-sm md:text-base">{value.subtitle}</p>
									</div>
									<div className="bg-slate-200 w-full md:w-[503px] lg:w-[503px] h-[311px] rounded-lg mt-4 md:mt-0 lg:mt-0" />
								</div>
							</li>
						))}
					</ul>
				</Feature.Section>

				<Feature.Section
					type="none"
					typeContent="desain-apk"
					data={design_apk}
				/>

				<Feature.Section
					type="none"
					typeContent="manajemen-timses"
					data={apliksi_timses}
				/>
			</Home.SectionService>
		</MainLayout>
	);
}

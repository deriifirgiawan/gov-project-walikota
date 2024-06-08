"use client";
import { useMemo } from "react";
import { TypeNavData } from "@/types";
import { SectionCarousel } from "./SectionCarousel";
import { ImageConstant } from "@/constants";
import { TypingAnimation } from "../TypingAnimation";
import { aboutData, metodologiData, solutionData } from "@/data";

interface Props {
	contentType?: TypeNavData;
}

export const SectionBanner = (_props: Props) => {
	const { contentType } = _props;
	const renderContent = useMemo(() => {
		if (contentType === "solusi-kami") {
			return (
				<div
					className="aspect-2/1 min-h-[32rem] md:aspect-3/1 bg-center bg-no-repeat bg-cover relative flex items-center justify-center"
					style={{
						backgroundImage: `url(${ImageConstant.BANNER_Walikota})`,
					}}
				>
					<div className="container text-center px-4 mx-auto sm:max-w-screen-sm md:max-w-screen-md">
						<h3 className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-8">
							{solutionData.title}
						</h3>
						<TypingAnimation texts={solutionData.subtitles} />
					</div>
				</div>
			);
		}
		if (contentType === "metodologi") {
			return (
				<div
					className="aspect-2/1 min-h-[32rem] md:aspect-3/1 bg-center bg-no-repeat bg-cover relative flex items-center justify-center"
					style={{
						backgroundImage: `url(${ImageConstant.BACKGROUND_METHOD})`,
					}}
				>
					<div className="container text-center px-4 mx-auto sm:max-w-screen-sm md:max-w-screen-md">
						<h3 className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-8">
							{metodologiData.title}
						</h3>
					</div>
				</div>
			);
		}

		if (contentType === "tentang-kami") {
			return (
				<div
					className="aspect-2/1 min-h-[32rem] md:aspect-3/1 bg-center bg-no-repeat bg-cover relative flex items-center justify-center"
					style={{
						backgroundImage: `url(${ImageConstant.BACKGROUND_ABOUT})`,
					}}
				>
					<div className="container text-center px-4 mx-auto sm:max-w-screen-sm md:max-w-screen-md">
						<h3 className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-8">
							{aboutData.slogan}
						</h3>
					</div>
				</div>
			);
		}

		if (contentType === "how-to") {
			return (
				<div
					className="aspect-2/1 min-h-[32rem] md:aspect-3/1 bg-center bg-no-repeat bg-cover relative flex items-center justify-center"
					style={{
						backgroundImage: `url(${ImageConstant.BACKGROUND_BANNER})`,
					}}
				/>
			);
		}

		return <SectionCarousel />;
	}, []);

	return renderContent;
};

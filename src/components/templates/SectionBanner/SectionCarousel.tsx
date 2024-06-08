"use client";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
	AwaitedReactNode,
	Fragment,
	JSXElementConstructor,
	ReactElement,
	ReactNode,
	ReactPortal,
	SetStateAction,
	useState,
} from "react";
import { Button } from "@/components/ui/button";
import { ImageConstant } from "@/constants";
import { HomeData } from "@/data";

const { BANNER_WALIKOTA } = ImageConstant;

export const SectionCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const activeDotColor = "#B8135D";
	const inactiveDotColor = "white";
	const settings = {
		dots: true,
		infinite: true,
		speed: 700,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		appendDots: (
			dots:
				| string
				| number
				| bigint
				| boolean
				| ReactElement<any, string | JSXElementConstructor<any>>
				| Iterable<ReactNode>
				| ReactPortal
				| Promise<AwaitedReactNode>
				| null
				| undefined
		) => (
			<div
				style={{
					position: "absolute",
					bottom: "10px",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					padding: "10px",
				}}
			>
				<ul style={{ margin: "0px" }}>{dots}</ul>
			</div>
		),
		customPaging: (i: number) => (
			<div
				style={{
					width: "10px",
					height: "10px",
					backgroundColor:
						currentSlide === i ? activeDotColor : inactiveDotColor,
					borderRadius: "50%",
					display: "inline-block",
				}}
			></div>
		),
		beforeChange: (oldIndex: any, newIndex: SetStateAction<number>) => {
			setCurrentSlide(newIndex);
		},
	};
	const slides = [
		{ url: BANNER_WALIKOTA, alt: "slide1" },
		{ url: BANNER_WALIKOTA, alt: "slide2" },
		{ url: BANNER_WALIKOTA, alt: "slide3" },
	];
	return (
		<div className="overflow-hidden">
			<Carousel>
				<Slider {...settings}>
					{slides.map((slide, index) => (
						<Fragment key={index}>
							<CarouselItem
								className="aspect-2/1 carousel-item min-h-[32rem] md:h-screen lg:h-screen md:aspect-3/1 bg-center bg-no-repeat bg-cover relative flex items-center justify-center"
								style={{ backgroundImage: `url(${slide.url})` }}
							></CarouselItem>
						</Fragment>
					))}
				</Slider>
				<div className="text-white right-0 left-0 absolute top-24 bottom-0 flex justify-center flex-col px-8">
					<h1 className="text-4xl font-semibold mb-4">{HomeData.title}</h1>
					<p className="text-xl mb-6 pr-[48rem]">{HomeData.subtitle}</p>
					<div>
						<Button
							variant="outline"
							className="bg-transparent font-bold text-lg"
						>
							Hubungi Kami
						</Button>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

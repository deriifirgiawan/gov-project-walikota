"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navMenuData } from "@/data";
import { useNavbar } from "./hooks";
import {
	$activeStyle,
	$activeTextStyle,
	$defaultStyle,
	$defaultTextStyle,
	$defaultTextStyleSheet,
} from "./Navbar.style";
import { ImageConstant } from "@/constants";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const { DEFAULT_LOGO, ACTIVE_LOGO, ICON_PLAYSTORE } = ImageConstant;

export const Navbar = () => {
	const { scrolled, setScrolled, openSheet, setOpenSheet } = useNavbar();

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setScrolled(scrollTop >= 200);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav className={scrolled ? $activeStyle : $defaultStyle}>
			<Link href={"/"} className="hover:cursor-pointer">
				<Image
					className="h-[40px] w-[161px]"
					src={scrolled ? ACTIVE_LOGO : DEFAULT_LOGO}
					alt={"Logo"}
					width={161}
					height={40}
				/>
			</Link>

			<div className="hidden gap-16 lg:flex md:hidden">
				{navMenuData.map((value) => {
					if (value.type === "navigate") {
						return (
							<Link
								className={scrolled ? $activeTextStyle : $defaultTextStyle}
								href={`/${value.slug}`}
								key={value.id}
							>
								{value.name}
							</Link>
						);
					}

					return (
						<NavigationMenu key={value.id} className="z-50">
							<NavigationMenuList>
								<NavigationMenuItem onClick={() => console.log("clik")}>
									<Link href={`/${value.slug}`}>
										<NavigationMenuTrigger
											className={
												scrolled ? $activeTextStyle : $defaultTextStyle
											}
										>
											{value.name}
										</NavigationMenuTrigger>
									</Link>
									<NavigationMenuContent>
										<ul className="w-[400px] p-8 gap-5 flex flex-col">
											{value.subLink?.map((item) => {
												return (
													<Link
														key={item.slug}
														href={`/${value.slug}${item.slug}`}
														className="hover:text-red-700"
													>
														{item.name}
													</Link>
												);
											})}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					);
				})}
			</div>

			<div className="block md:hidden lg:hidden gap-2">
				<button onClick={() => setOpenSheet(true)}>
					<Menu className={`${scrolled ? "text-black" : "text-white"}`} />
				</button>
			</div>

			<div className="hidden md:hidden lg:flex gap-2">
				<Button
					variant="ghost"
					className={`rounded-lg ${scrolled ? "text-black" : "text-white"}`}
				>
					<Image
						className="w-[16px] h-[16px] mr-4"
						src={ICON_PLAYSTORE}
						alt="Download"
						width={16}
						height={16}
					/>
					Download
				</Button>
				<Button className="rounded-lg bg-[#f14279]">Register</Button>
			</div>
			<Sheet open={openSheet}>
				<SheetContent onCloseSheet={() => setOpenSheet(false)}>
					<div className="gap-4 flex-col flex mt-9">
						{navMenuData.map((value) => {
							if (value.type === "navigate") {
								return (
									<Link
										className={
											scrolled ? $activeTextStyle : $defaultTextStyleSheet
										}
										href={`/${value.slug}`}
										key={value.id}
									>
										{value.name}
									</Link>
								);
							}

							return (
								<div key={value.id}>
									<Link
										className={
											scrolled ? $activeTextStyle : $defaultTextStyleSheet
										}
										href={`/${value.slug}`}
									>
										{value.name}
									</Link>
									<div className="flex flex-col">
										{value.subLink?.map((item) => (
											<Link
												key={item.id}
												className={`${
													scrolled ? $activeTextStyle : $defaultTextStyleSheet
												} ml-4`}
												href={`/${item.slug}`}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

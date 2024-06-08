"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";

interface Props {
	children: ReactNode;
}
export const Wrapper = (_props: Props) => {
	const { children } = _props;

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);
	return <main>{children}</main>;
};

interface Props {
	title: string;
	list: {
		id: number;
		title: string;
	}[];
}
export const Card = (_props: Props) => {
	const { title, list } = _props;
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="500"
			data-aos-once="true"
			className="w-full text-white bg-white border border-white bg-opacity-25 rounded-lg p-8 shadow-xl max-w-xl"
		>
			<h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
			<ul>
				{list.map((value) => (
					<li className="mb-2" key={value.title}>
						- {value.title}
					</li>
				))}
			</ul>
		</div>
	);
};

interface Field {
	title: string;
	value: string;
}

interface LinkBoxProps {
	fields: Field[];
	action: () => void;
}

const LinkBox: React.FC<LinkBoxProps> = ({ fields, action }) => (
	<>
		<button className="flex justify-around w-[96%] mt-5" onClick={action}>
			{fields &&
				fields.map((item: any, i: any) => (
					<div key={i} className="flex pl-3 items-center w-[40%]">
						<p className="text-primary-gray text-lg font-normal mr-5">
							{item.title}
						</p>
						<p className="text-primary-white text-lg font-bold">{item.value}</p>
					</div>
				))}
		</button>
		<div className="h-[1px] w-full bg-primary-gray" />
	</>
);

export default LinkBox;

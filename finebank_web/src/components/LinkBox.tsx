export default function LinkBox(props: any) {
	const fields = props.fields;

	return (
		<>
			<button className="flex-row w-[96%]" onClick={props.action}>
				{props.image}
				{fields &&
					fields.map((item: any, i: any) => (
						<div key={i} className="flex-1 flex-grow pl-3 items-center">
							<p className="text-primary-gray text-lg font-normal mr-5">
								{item.title}
							</p>
							<p className="text-primary-white text-lg font-bold">
								{item.value}
							</p>
						</div>
					))}
			</button>
			<div className="h-[1px] w-full mx-5 bg-primary-gray" />
		</>
	);
}

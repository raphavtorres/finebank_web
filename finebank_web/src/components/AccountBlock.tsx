import Image, { StaticImageData } from "next/image";

type Props = {
	image: StaticImageData;
	msg: String;
};

export default function AccountBlock({ image, msg }: Props) {
	return (
		<>
			<div className="w-[35rem] h-[35rem] m-5 p-5 bg-primary-white rounded-3xl text-center flex flex-col justify-center items-center">
				<h1 className="font-bold text-primary-black text-3xl pb-3">
					Conta Digital
				</h1>
				<p className="w-[25rem] text-lg">{msg}</p>
				<Image src={image} alt="logo" className="h-auto w-[25rem]" />
			</div>
		</>
	);
}

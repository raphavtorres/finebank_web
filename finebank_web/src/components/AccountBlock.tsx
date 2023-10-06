import Image, { StaticImageData } from "next/image";

type Props = {
	image: StaticImageData;
	msg: String;
};

export default function AccountBlock({ image, msg }: Props) {
	return (
		<>
			<div className="w-[80%] h-auto md:w-[35rem] md:h-[35rem] m-5 p-5 bg-primary-white rounded-3xl text-center flex flex-col justify-center items-center">
				<h1 className="font-bold text-primary-black text-2xl md:text-3xl pb-3">
					Conta Digital
				</h1>
				<p className="w-full md:w-[25rem] text-base md:text-lg">{msg}</p>
				<Image src={image} alt="logo" className="h-auto w-[70%] md:w-[25rem]" />
			</div>
		</>
	);
}

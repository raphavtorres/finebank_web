import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export default function Container({ children }: Props) {
	return (
		<div className="w-full max-w-[1440px] h-fit min-h-screen px-[15px] mx-auto mb-10 flex justify-between">
			{children}
		</div>
	);
}

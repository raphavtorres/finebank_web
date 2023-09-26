import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export default function Container({ children }: Props) {
	return (
		<div className="w-full max-w-[1440px] px-[15px] mx-auto flex justify-between">
			{children}
		</div>
	);
}

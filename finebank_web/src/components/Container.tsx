import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export default function Container({ children }: Props) {
	return (
		<div className="h-full w-full max-w-[1440px] px-[15px] mx-auto flex items-center justify-between">
			{children}
		</div>
	);
}

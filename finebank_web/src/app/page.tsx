import SectionPanel from "@/components/SectionPanel";
import SectionAccount from "@/components/SectionAccount";
import SectionAbout from "@/components/SectionAbout";
import Header from "@/components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<SectionPanel />
			<SectionAccount />
			<SectionAbout />
		</>
	);
}

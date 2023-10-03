import SectionPanel from "@/components/SectionPanel";
import SectionAccount from "@/components/SectionAccount";
import SectionAbout from "@/components/SectionAbout";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<SectionPanel />
			<SectionAccount />
			<SectionAbout />
			<Footer />
		</>
	);
}

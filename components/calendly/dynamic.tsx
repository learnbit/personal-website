import dynamic from "next/dynamic";

const Calendly = dynamic(() => import("./client"), { ssr: false });

export default function Dynamic() {
	return (
		<>
			<Calendly />
		</>
	);
}

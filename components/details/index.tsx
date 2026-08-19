import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Experience from "../experience";
import { experiences, details } from "../../data";
import clsx from "clsx";
import { MenuItem } from "../main";
import { Footer } from "@/components/footer";

export function Details(props: {
	mainRef: React.MutableRefObject<HTMLElement | null>;
	setSelectedMenuItem: React.Dispatch<React.SetStateAction<MenuItem>>;
}) {
	const experienceRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const scrollContainer = props.mainRef.current;
		const experienceSection = experienceRef.current;

		if (!scrollContainer || !experienceSection) return;

		const updateSelectedSection = () => {
			const containerTop = scrollContainer.getBoundingClientRect().top;
			const experienceTop = experienceSection.getBoundingClientRect().top;
			const activationOffset = 120;

			props.setSelectedMenuItem(
				experienceTop <= containerTop + activationOffset
					? MenuItem.Experience
					: MenuItem.About
			);
		};

		updateSelectedSection();
		scrollContainer.addEventListener("scroll", updateSelectedSection, {
			passive: true,
		});

		return () => {
			scrollContainer.removeEventListener("scroll", updateSelectedSection);
		};
	}, [props.mainRef, props.setSelectedMenuItem]);

	return (
		<main className={styles.container}>
			<section id="about" className={styles.aboutSection} aria-label="About me">
				<div className={clsx(styles.aboutTitleMobile, styles.glassBox)}>
					<h2>ABOUT</h2>
				</div>
				<div className={styles.spacing}></div>
				<p className={styles.about}>{details}</p>
			</section>
			<section
				id="experience"
				ref={experienceRef}
				className={styles.experienceContainer}
				aria-label="Work experience"
			>
				<div className={clsx(styles.experienceMobile, styles.glassBox)}>
					<h2>EXPERIENCE</h2>
				</div>

				<div className={styles.spacing}></div>
				<ol className={styles.experience}>
					{experiences.map((ex, i) => (
						<Experience key={i} {...ex} />
					))}
				</ol>
			</section>

			<Footer />
		</main>
	);
}

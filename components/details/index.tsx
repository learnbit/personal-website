import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Experience from "../experience";
import { experiences, details } from "../../data";
import clsx from "clsx";
import { MenuItem } from "../main";
import { Footer } from "@/components/footer";

export function Details(props: {
	mainRef: React.MutableRefObject<null>;
	setSelectedMenuItem: React.Dispatch<React.SetStateAction<MenuItem>>;
}) {
	const aboutRef = useRef<HTMLElement | null>(null);
	const experienceRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntries = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				const visibleSection = visibleEntries[0];
				if (!visibleSection) return;

				props.setSelectedMenuItem(
					visibleSection.target.id === "experience"
						? MenuItem.Experience
						: MenuItem.About
				);
			},
			{
				root: props.mainRef.current,
				threshold: [0.25, 0.5, 0.75],
			}
		);

		if (aboutRef.current) observer.observe(aboutRef.current);
		if (experienceRef.current) observer.observe(experienceRef.current);

		return () => {
			observer.disconnect();
		};
	}, [props.mainRef, props.setSelectedMenuItem]);

	return (
		<main className={styles.container}>
			<section id="about" ref={aboutRef} aria-label="About me">
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

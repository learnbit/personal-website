import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
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
	const experienceRef = useRef(null);
	const [isExperienceDisplayed, setIsExperienceDisplayed] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsExperienceDisplayed(entry.isIntersecting);
			},
			{
				root: props.mainRef.current,
				rootMargin: "-300px",
			}
		);

		if (experienceRef.current) {
			observer.observe(experienceRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [props.mainRef]);

	useEffect(() => {
		props.setSelectedMenuItem(
			isExperienceDisplayed ? MenuItem.Experience : MenuItem.About
		);
	}, [props, isExperienceDisplayed]);

	return (
		<main ref={props.mainRef} className={styles.container}>
			<section aria-label="About me">
				<div className={clsx(styles.aboutTitleMobile, styles.glassBox)}>
					<h2>ABOUT</h2>
				</div>
				<div className={styles.spacing}></div>
				<p id="about" className={styles.about}>
					{details}
				</p>
			</section>
			<section
				className={styles.experienceContainer}
				aria-label="Work experience"
			>
				<div className={clsx(styles.experienceMobile, styles.glassBox)}>
					<h2>EXPERIENCE</h2>
				</div>

				<div className={styles.spacing}></div>
				<ol ref={experienceRef} id="experience" className={styles.experience}>
					{experiences.map((ex, i) => (
						<Experience key={i} {...ex} />
					))}
				</ol>
			</section>

			<Footer />
		</main>
	);
}

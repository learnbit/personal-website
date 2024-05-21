"use client";

import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./styles.module.css";
import Experience from "../experience";
import { experiences, details } from "../../data";
import clsx from "clsx";
import { MenuItem } from "../main";

export function Details(props: {
	mainRef: React.MutableRefObject<null>;
	setSelectedMenuItem: React.Dispatch<React.SetStateAction<MenuItem>>;
}) {
	// const detailsRef = useRef(null);
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
				// rootMargin: "0px",
			}
		);

		if (experienceRef.current) {
			observer.observe(experienceRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		props.setSelectedMenuItem(
			isExperienceDisplayed ? MenuItem.Experience : MenuItem.About
		);
	}, [isExperienceDisplayed]);

	return (
		<>
			<div ref={props.mainRef} className={styles.container}>
				<div>
					<div className={clsx(styles.aboutTitleMobile, styles.glassBox)}>
						<h2>ABOUT</h2>
					</div>
					<div className={styles.spacing}></div>
					<p id="about" className={styles.about}>
						{details}
					</p>
				</div>
				<div>
					<div className={clsx(styles.experienceMobile, styles.glassBox)}>
						<h2>EXPERIENCE</h2>
					</div>

					<div className={styles.spacing}></div>
					<div
						ref={experienceRef}
						id="experience"
						className={styles.experience}
					>
						{experiences.map((ex, i) => (
							<Experience key={i} {...ex} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

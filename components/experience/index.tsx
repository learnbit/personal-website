import React from "react";
import Skill from "../skill";

import styles from "./styles.module.css";

type ExperienceProps = {
	startYear: string;
	endYear: string;
	position: string;
	company: string;
	description: string;
	yearsAndMonths: string;
	skills: string[];
};

export default function Experience(props: ExperienceProps) {
	const {
		startYear,
		endYear,
		position,
		company,
		description,
		skills,
		yearsAndMonths,
	} = props;

	const years = `${startYear} - ${endYear}`;
	const title = `${position} at ${company}`;
	const allSkills = skills.map((skill, index) => {
		return <Skill title={skill} key={index} />;
	});

	return (
		<div className={styles.container}>
			<div className={styles.years}>
				<span className={styles.year}>{years}</span>
				<span className={styles.yearsAndMonths}>{yearsAndMonths}</span>
			</div>
			<div className={styles.details}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>

				<div className={styles.skills}>{allSkills}</div>
			</div>
		</div>
	);
}

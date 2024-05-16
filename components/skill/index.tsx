"use client";

import React from "react";
import styles from "./styles.module.css";

type SkillProps = {
	title: string;
};

export default function Skill(props: SkillProps) {
	return <div className={styles.skill}>{props.title}</div>;
}

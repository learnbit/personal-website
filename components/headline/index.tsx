"use client";

import React from "react";
import styles from "./styles.module.css";
import { SocialIcon } from "@/components/social-icon";
import Calendly from "../calendly/index";
import clsx from "clsx";
import { MenuItem } from "../main";

export function Headline(props: { selectedMenuItem: string }) {
	const resumeURL =
		"https://firebasestorage.googleapis.com/v0/b/airtmdashboard.appspot.com/o/WilsonRaul_Balderrama_Resume.pdf?alt=media&token=43391f34-397a-4f49-a214-f82838cef924";
	const linkedinURL = "https://www.linkedin.com/in/wilsonbalderrama/";
	const stackoverflowURL = "https://stackoverflow.com/users/1591584/wilson";

	return (
		<div id="test" className={styles.container}>
			<div className={styles.content}>
				<div className={styles.namePositionContainer}>
					<h1 className={styles.name}>Wilson Balderrama</h1>
					<h2 className={styles.position}>Senior Frontend Engineer</h2>
					<p className={styles.motto}>
						Turning ideas into interactive experiences
					</p>
				</div>

				<ul className={styles.menu}>
					<li
						className={clsx({
							[styles.active]: props.selectedMenuItem === MenuItem.About,
						})}
					>
						<a href="#about">
							<span></span>
							ABOUT
						</a>
					</li>
					<li
						className={clsx({
							[styles.active]: props.selectedMenuItem === MenuItem.Experience,
						})}
					>
						<a href="#experience">
							<span></span>
							EXPERIENCE
						</a>
					</li>
				</ul>

				<div className={styles.calendlySocial}>
					<div className={styles.socialIcons}>
						<a target="_blank" href={linkedinURL}>
							<SocialIcon type={"linkedin"} />
						</a>

						<a target="_blank" href={stackoverflowURL}>
							<SocialIcon type={"stackoverflow"} />
						</a>

						<a target="_blank" href={resumeURL}>
							<SocialIcon type={"pdf"} />
						</a>
					</div>
					<div className={styles.calendlyContainer}>
						<Calendly />
						<div id="__next"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

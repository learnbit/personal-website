"use client";

import React from "react";
import styles from "./styles.module.css";
import { SocialIcon } from "@/components/social-icon";
import clsx from "clsx";
import { MenuItem } from "../main";

export function Headline(props: { selectedMenuItem: string }) {
  const resumeURL = "/resume.pdf";
  const linkedinURL = "https://www.linkedin.com/in/wilsonbalderrama/";
  const stackoverflowURL = "https://stackoverflow.com/users/1591584/wilson";

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.namePositionContainer}>
          <h1 className={styles.name}>Wilson Balderrama</h1>
          <h2 className={styles.position}>Senior Frontend Engineer</h2>
          <p className={styles.motto}>
            React · Next.js · TypeScript · Frontend Architecture · AI-Assisted
            Development
          </p>
        </div>
        <nav className={styles.menu} aria-label="In-page jump links">
          <ul>
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
        </nav>
        <div className={styles.socialContainer} aria-label="Social media">
          <div className={styles.socialIcons}>
            <a
              target="_blank"
              href={linkedinURL}
              aria-label="LinkedIn (opens in a new tab)"
              title="LinkedIn"
            >
              <SocialIcon type={"linkedin"} />
            </a>

            <a
              target="_blank"
              href={stackoverflowURL}
              aria-label="Stackoverflow (opens in a new tab)"
            >
              <SocialIcon type={"stackoverflow"} />
            </a>

            <a
              target="_blank"
              href={resumeURL}
              aria-label="Resume in pdf format (opens in a new tab)"
            >
              <SocialIcon type={"pdf"} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

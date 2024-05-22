import React from "react";
import styles from "./styles.module.css";

export function Footer() {
	return (
		<footer className={styles.container}>
			<p>
				Developed by me. Built with{" "}
				<a
					aria-label="Next.js  (opens in a new tab)"
					target="blank"
					href="https://nextjs.org/"
				>
					Next.js
				</a>{" "}
				and deployed with{" "}
				<a
					aria-label="Vercel  (opens in a new tab)"
					target="blank"
					href="https://vercel.com/"
				>
					Vercel
				</a>
				. All text is set in the{" "}
				<a
					aria-label="Inter font (opens in a new tab)"
					target="blank"
					href="https://rsms.me/inter/"
				>
					Inter
				</a>{" "}
				typeface
			</p>
		</footer>
	);
}

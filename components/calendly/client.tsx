"use client";
import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import styles from "./styles.module.css";

export default function Client() {
	const [rootElement, setRootElement] = useState<HTMLElement>();

	useEffect(() => {
		// Wait for the component to be mounted before setting the rootElement
		if (typeof window !== "undefined") {
			setRootElement(document.getElementById("__next")!);
		}
	}, []);

	return (
		<>
			<div className={styles.titleText}>Want to have a conversation?</div>
			<PopupButton
				className={styles.calendyButton}
				url="https://calendly.com/wilson-balderrama/interviews?hide_event_type_details=1"
				/*
				 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
				 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
				 */
				rootElement={rootElement!}
				text="Book a time!"
			/>
		</>
	);
}

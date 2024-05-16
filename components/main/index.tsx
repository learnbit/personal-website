"use client";

import React, { useState, useEffect, useRef } from "react";
import { Details } from "@/components/details/index";
import { Header } from "@/components/header";

import styles from "./styles.module.css";

export enum MenuItem {
	About = "#about",
	Experience = "#experience",
}

export function Main() {
	const mainRef = useRef(null);
	const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>(
		MenuItem.About
	);

	function selectMenuItem(item: string | undefined = "") {
		if (item === MenuItem.About.valueOf()) {
			setSelectedMenuItem(MenuItem.About);
		} else if (item === MenuItem.Experience.valueOf()) {
			setSelectedMenuItem(MenuItem.Experience);
		}
	}

	useEffect(() => {
		const onHashChanged = () => {
			selectMenuItem(window.location?.hash);
		};

		selectMenuItem(window.location?.hash);
		window.addEventListener("hashchange", onHashChanged);

		return () => {
			window.removeEventListener("hashchange", onHashChanged);
		};
	}, []);

	return (
		<main id="root" ref={mainRef} className={styles.rootContainer}>
			<Header selectedMenuItem={selectedMenuItem} />
			<Details mainRef={mainRef} setSelectedMenuItem={setSelectedMenuItem} />
		</main>
	);
}

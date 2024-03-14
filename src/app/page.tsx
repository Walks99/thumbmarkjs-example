"use client";

import React, { useState, useEffect } from "react";
import { getFingerprintData } from "@thumbmarkjs/thumbmarkjs";
import styles from "./page.module.css";

export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFingerprintData();
        console.log(result)
      } catch (error) {
        console.error("Error getting fingerprint:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <p>Open dev tools to view the logged result of calling the getFingerprintData function from ThumbMarkJS</p>
    </main>
  );
}

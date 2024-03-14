"use client";

import React, { useState, useEffect } from "react";
import { getFingerprint, getFingerprintData } from "@thumbmarkjs/thumbmarkjs";
import styles from "./page.module.scss";

export default function Home() {
  const [fingerprint, setFingerprint] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFingerprintData();
        console.log(result);
        const fingerprint = await getFingerprint();
        setFingerprint(fingerprint);
      } catch (error) {
        console.error("Error getting fingerprint:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.fingerprintInfoContainer}>
        <p>
          ThumbMarkJS
        </p>
        <p>
          Your fingerprint is: <strong style={{"color": "#00FFFF"}}>{fingerprint}</strong>
        </p>
        <p>
          Open dev tools to view the logged result of calling the
          getFingerprintData function from ThumbMarkJS
        </p>
      </div>
    </main>
  );
}

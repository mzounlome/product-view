"use client";

import CardText from "./components/CardText";
import Image from "next/image";
import { borderRadius } from "@mui/system";
import perfumeImage from "./images/image-product-desktop.jpg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.center}>
        <div className={styles.imagebox}>
          <Image
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            src={perfumeImage}
            alt="chanel"
            height={450}
            width={325}
          />
        </div>
        <CardText></CardText>
      </div>

      <div className={styles.grid}></div>
    </main>
  );
}

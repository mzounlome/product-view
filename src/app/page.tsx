"use client";

import CardText from "./components/CardText";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.center}>
        <div className={styles.imagebox}>
          <image
            className={styles.image}
            src="./images/image-product-desktop.jpg"
            alt="chanel"
          />
        </div>
        <CardText></CardText>
      </div>

      <div className={styles.grid}></div>
    </main>
  );
}

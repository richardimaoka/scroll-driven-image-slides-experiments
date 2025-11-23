"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLParagraphElement>(null);

  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
  ];

  useEffect(() => {
    if (ref.current) {
      console.log("called");
      ref.current.animate(
        { opacity: [0, 1] },
        {
          fill: "forwards",
          timeline: new ViewTimeline({ subject: ref.current }),
        }
      );
    }
  });

  return (
    <div>
      <div className={styles["image-container"]}>
        {images.map((src, index) => (
          <Image
            key={index}
            className={styles.image}
            src={src}
            alt={`Image ${index + 1}`}
            width={500}
            height={300}
          />
        ))}
      </div>
      <div className={styles.pContainer}>
        <p>これは最初の説明文です</p>
        <p>
          これは2番目の説明文です。I accept the
          agreementを選択し、Nextをクリックしましょう。
        </p>
        <p ref={ref}>次は3番目の手順です。右端のボタンをクリックします。</p>
        <p>4番目の手順です。中央のボタンをクリックします。</p>
        <p>5番目の手順です。左端のボタンをクリックします。</p>
        <p>6番目の手順です。上部のメニューから設定を選択します。</p>
        <p>7番目の手順です。設定画面で保存ボタンをクリックします。</p>
      </div>
    </div>
  );
}

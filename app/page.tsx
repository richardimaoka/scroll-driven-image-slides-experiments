"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { MyParagraph } from "./MyParagraph";
import { MyImage } from "./MyImage";

export default function Home() {
  console.log("rendering Home()");

  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
  ];

  const paragraphs = [
    "これは最初の説明文です",
    "これは2番目の説明文です。I accept the agreementを選択し、Nextをクリックしましょう。",
    "次は3番目の手順です。右端のボタンをクリックします。",
    "4番目の手順です。中央のボタンをクリックします。",
    "5番目の手順です。左端のボタンをクリックします。",
    "6番目の手順です。上部のメニューから設定を選択します。",
    "7番目の手順です。設定画面で保存ボタンをクリックします。",
  ];

  const [pElements, setP_Elements] = useState<HTMLParagraphElement[]>(
    Array(images.length).fill(null)
  );

  return (
    <div>
      <div className={styles["image-container"]}>
        {images.map((src, index) => (
          <MyImage
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            paragraphElement={pElements[index]}
          />
        ))}
      </div>
      <div className={styles.pContainer}>
        {paragraphs.map((text, index) => (
          <MyParagraph
            key={index}
            text={text}
            setParagraph={(p) => {
              let newRefs = [...pElements];
              newRefs[index] = p;
              setP_Elements(newRefs);
            }}
            paragraphElement={pElements[index]}
          />
        ))}
      </div>
    </div>
  );
}

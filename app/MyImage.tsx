import { useEffect, useRef } from "react";
import styles from "./MyImage.module.css";
import Image from "next/image";

type Props = {
  paragraphElement: HTMLParagraphElement | null;
  alt: string;
  src: string;
};

export function MyImage(props: Props) {
  console.log(`rendering MyImage(${props.src})`);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    console.log(`triggering useEffect in MyImage(${props.src})`);

    if (props.paragraphElement && ref.current) {
      ref.current.animate(
        { opacity: [0, 1] },
        {
          fill: "forwards",
          //@ts-ignore
          timeline: new ViewTimeline({ subject: props.paragraphElement }),
          //@ts-ignore
          rangeStart: "entry 45%",
          rangeEnd: "cover 50%",
        }
      );
    }
  });

  return (
    <Image
      className={styles.image}
      ref={ref}
      src={props.src}
      alt={props.alt}
      width={500}
      height={300}
    />
  );
}

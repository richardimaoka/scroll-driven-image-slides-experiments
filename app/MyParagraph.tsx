import { useEffect, useRef } from "react";
import styles from "./MyParagraph.module.css";

type Props = {
  paragraphElement: HTMLParagraphElement | null;
  setParagraph: (p: HTMLParagraphElement) => void;
  text: string;
};

export function MyParagraph(props: Props) {
  console.log(`rendering MyParagraph(${props.text})`);

  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current && !props.paragraphElement) {
      props.setParagraph(ref.current);
    }
  });

  return (
    <p className={styles.component} ref={ref}>
      {props.text}
    </p>
  );
}

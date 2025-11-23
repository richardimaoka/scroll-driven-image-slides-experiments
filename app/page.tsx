import Image from "next/image";

export default function Home() {
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
  ];

  return (
    <div>
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          width={500}
          height={300}
        />
      ))}
    </div>
  );
}

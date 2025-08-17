"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";

interface Props {
  data: {
    subtext: string;
    title: string;
    img: string;
  }[];
}

const Carousels = ({ data }: Props) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel
      slideGap={4}
      plugins={[autoplay.current]}
      withControls={false}
      classNames={{
        indicator: "rounded-full",
      }}
      withIndicators
      height={200}
      styles={{
        slide: {
          overflow: "hidden",
          borderRadius: "12px",
        },
        indicator: {
          width: "6px",
          height: "6px",
        },
      }}
    >
      {data.map((item, index) => (
        <Carousel.Slide
          key={index}
          styles={{
            slide: {
              borderRadius: "12px",
              overflow: "hidden",
            },
          }}
        >
          <div
            className="w-full h-full relative rounded-xl bg-top bg-cover overflow-hidden"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-black/25 w-full h-full" />
            <div className="absolute bottom-7 left-4 text-white z-10">
              <p className="sub_text font-medium">{item.title}</p>
              <p className="font-semibold mid_text">{item.subtext}</p>
            </div>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default Carousels;

import { Carousel } from "antd";
import Image from "next/image";
interface BCarouselProps {
  className?: string;
}
const BCarousel = ({ className }: BCarouselProps) => {
  const carouselItems: string[] = [
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className={`${className}  `}>
      <Carousel
        className="md:h-[600px]"
        autoplay
        draggable
        autoplaySpeed={5000}
      >
        {carouselItems.map((item, index) => (
          <Image
            className="md:h-[600px]"
            key={index}
            style={contentStyle}
            src={item}
            width={6000}
            height={6000}
            alt="bakery"
            objectFit="contain"
          />
        ))}
      </Carousel>
    </div>
  );
};
const contentStyle: React.CSSProperties = {
  color: "#fff",
  marginTop: "0",

  textAlign: "center",
  background: "#364d79",
};
export default BCarousel;

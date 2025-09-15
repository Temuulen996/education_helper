import { Carousel } from "antd";
import Image from "next/image";
interface BCarouselProps {
  className?: string;
}
const BCarousel = ({ className }: BCarouselProps) => {
  const carouselItems: string[] = [
    "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614205569927-1f104e088eee?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

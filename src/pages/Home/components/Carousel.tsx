import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export interface IPropsCarousel {
  photos: string[];
}
export default function Carousel({ photos }: IPropsCarousel) {
  const [liked, setLiked] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef} className="w=full aspect-square overflow-hidden">
      {divRef.current && (
        <CarouselProvider
          naturalSlideWidth={divRef.current.offsetWidth}
          naturalSlideHeight={divRef.current.offsetWidth}
          totalSlides={photos.length}
          infinite
        >
          <Slider className="w-full h-full relative">
            {photos.map((photo, index) => (
              <Slide
                index={index}
                key={index}
                className=" w-full h-full relative"
              >
                <img
                  src={photo}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute opacity-40 bg-blue-900 w-full h-full top-0" />
                <div
                  className="absolute top-0 right-0 p-6"
                  onClick={() => {
                    setLiked(liked!);
                  }}
                >
                  {liked ? (
                    <FaHeart
                      className="text-white font-bold overflow-visible"
                      size={20}
                      strokeWidth={50}
                    />
                  ) : (
                    <FaRegHeart
                      className="text-white font-bold overflow-visible"
                      size={20}
                      strokeWidth={50}
                    />
                  )}{" "}
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      )}
    </div>
  );
}

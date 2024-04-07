import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";

export default function ImageSlider({ imageList }) {
  //   console.log(imageList);
  return (
    <Swiper
      className="swiper"
      direction={"horizontal"}
      mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }}
      spaceBetween={30}
      centeredSlides={true}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      speed={900}
      modules={[Autoplay, Pagination, Navigation, Mousewheel]}
      //   breakpoints={{
      //     "@0.00": {
      //       slidesPerView: 3,
      //       spaceBetween: 10,
      //     },
      //     "@0.75": {
      //       slidesPerView: 4,
      //       spaceBetween: 10,
      //     },
      //     "@1.00": {
      //       slidesPerView: 1,
      //       spaceBetween: 10,
      //     },
      //     "@1.50": {
      //       slidesPerView: 1,
      //       spaceBetween: 10,
      //     },
      //   }}
    >
      {imageList?.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-auto object-cover ">
            <img src={item} alt="blog image" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

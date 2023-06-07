// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation} from "swiper";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";

const Banner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <Slider1 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider2 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

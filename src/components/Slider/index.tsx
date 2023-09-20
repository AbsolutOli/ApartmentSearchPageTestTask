import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../assets/img/slider1.jpg";
import Slide2 from "../../assets/img/slider2.jpg";
import Slide3 from "../../assets/img/slider3.jpg";
import Slide4 from "../../assets/img/slider4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.scss";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export const Slider: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sliderItem">
            <img src={Slide1} alt="City" />
            <p className="itemName"> הקרפטים</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderItem">
            <img src={Slide2} alt="City" />
            <p className="itemName"> אִיטַלִיָה</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderItem">
            <img src={Slide3} alt="City" />
            <p className="itemName"> אַפְרִיקָה</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderItem">
            <img src={Slide4} alt="City" />
            <p className="itemName"> הקרפטים</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderItem">
            <img src={Slide1} alt="City" />
            <p className="itemName"> הקרפטים</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderItem">
            <img src={Slide2} alt="City" />
            <p className="itemName"> אִיטַלִיָה</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderItem">
            <img src={Slide3} alt="City" />
            <p className="itemName"> אַפְרִיקָה</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderItem">
            <img src={Slide4} alt="City" />
            <p className="itemName"> הקרפטים</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

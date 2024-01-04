import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import cl from "./MySlider.module.scss";
import "swiper/css/navigation";
import "./MySlider.scss";
// Import Swiper styles
import "swiper/css";
import { ArrowLeftIcon, ArrowRightIcon } from "../SvgIcons/Icons";

const Slider = ({ children }: any) => {
  return (
    <div className="container-fluid">
      <div className={cl.sliderInfo}>
        <h1 className="title">Меню</h1>
        <div className="slider-buttons">
          <button className="swiper-button image-swiper-button-prev">
            <ArrowLeftIcon viewBox="0 0 16 16" size={32}/>
          </button>
          <button className="swiper-button image-swiper-button-next">
            <ArrowRightIcon viewBox="0 0 16 16" size={32} />
          </button>
        </div>
      </div>

      <div className={cl.wrapper}>
        <Swiper
          className={cl.slider}
          spaceBetween={10}
          slidesPerView={6}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Navigation]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1336: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};


export default Slider;
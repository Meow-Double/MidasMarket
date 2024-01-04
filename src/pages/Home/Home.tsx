import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import cl from "./Home.module.scss";
import { MySlider } from "ui";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

export const Home: React.FC<{}> = () => {
  const arr: string[] = [
    "Акции",
    "Горячие блюда",
    "Супы",
    "Хинкали",
    "Холодные закуски",
    "Салаты",
    "Свежая выпечка",
    "Десерты",
    "Напитки",
  ];

  const renderSliderItems = () => {
    return arr.map((item, index) => (
      <SwiperSlide className={cl.sliderCart} key={index}>
        <Link to={`меню/${item.toLowerCase()}`} >
          <img
            src={`/images/slider/img-${index + 1}.jpg`}
            alt={`images-${index + 1}`}
          />
          <span>{item}</span>
        </Link>
      </SwiperSlide>
    ));
  };

  return (
    <div>
      <Header />
      <main>
        <Menu />
        <div className={cl.menuSlider}>
          <MySlider>{renderSliderItems()}</MySlider>
        </div>
      </main>
    </div>
  );
};

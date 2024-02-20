import Header from './Header/Header';
import Menu from './Menu/Menu';
import cl from './Home.module.scss';
import { MySlider } from 'ui';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import Images1 from '../../../public/images/slider/img-1.jpg';
import Images2 from '../../../public/images/slider/img-2.jpg';
import Images3 from '../../../public/images/slider/img-3.jpg';
import Images4 from '../../../public/images/slider/img-4.jpg';
import Images5 from '../../../public/images/slider/img-5.jpg';
import Images6 from '../../../public/images/slider/img-6.jpg';
import Images7 from '../../../public/images/slider/img-7.jpg';
import Images8 from '../../../public/images/slider/img-8.jpg';
import Images9 from '../../../public/images/slider/img-9.jpg';

const imagesArray = [
  Images1,
  Images2,
  Images3,
  Images4,
  Images5,
  Images6,
  Images7,
  Images8,
  Images9,
]
export const Home: React.FC<{}> = () => {
  const arr: string[] = [
    'Акции',
    'Горячие блюда',
    'Супы',
    'Хинкали',
    'Холодные закуски',
    'Салаты',
    'Свежая выпечка',
    'Десерты',
    'Напитки',
  ];
  

  const renderSliderItems = () => {
    return arr.map((item, index) => (
      <SwiperSlide className={cl.sliderCart} key={index}>
        <Link to={`меню/${item.toLowerCase()}`}>
          <img src={imagesArray[index]} alt={`images-${index + 1}`} />
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

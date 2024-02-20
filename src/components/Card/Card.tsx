import cl from './Card.module.scss';
import { useNavigate } from 'react-router-dom';
import { CartIcon } from 'ui/SvgIcons/Icons';
import { useAction, useTypedSelector } from 'hooks';
import { memo } from 'react';
import { IItems } from 'types/cart';
// import trst from "../../../public/images/card"
import Image1 from '../../../public/images/card/img-1.jpg';
import Image2 from '../../../public/images/card/img-2.jpg';
import Image3 from '../../../public/images/card/img-3.jpg';
import Image4 from '../../../public/images/card/img-4.jpg';
import Image5 from '../../../public/images/card/img-5.jpg';
import Image6 from '../../../public/images/card/img-6.jpg';
import Image7 from '../../../public/images/card/img-7.jpg';
import Image8 from '../../../public/images/card/img-8.jpg';
import Image9 from '../../../public/images/card/img-9.jpg';
import Image10 from '../../../public/images/card/img-10.jpg';
import Image11 from '../../../public/images/card/img-11.jpg';
import Image12 from '../../../public/images/card/img-12.jpg';
import Image13 from '../../../public/images/card/img-13.jpg';
import Image14 from '../../../public/images/card/img-14.jpg';
import Image15 from '../../../public/images/card/img-15.jpg';
import Image16 from '../../../public/images/card/img-16.jpg';
import Image17 from '../../../public/images/card/img-17.jpg';
import Image18 from '../../../public/images/card/img-18.jpg';
import Image19 from '../../../public/images/card/img-19.jpg';
import Image20 from '../../../public/images/card/img-20.jpg';
import Image21 from '../../../public/images/card/img-21.jpg';
import Image22 from '../../../public/images/card/img-22.jpg';
import Image23 from '../../../public/images/card/img-23.jpg';
import Image24 from '../../../public/images/card/img-24.jpg';
import Image25 from '../../../public/images/card/img-25.jpg';
import Image26 from '../../../public/images/card/img-26.jpg';
import Image27 from '../../../public/images/card/img-27.jpg';
import Image28 from '../../../public/images/card/img-28.jpg';
import Image29 from '../../../public/images/card/img-29.jpg';
import Image30 from '../../../public/images/card/img-30.jpg';
import Image31 from '../../../public/images/card/img-31.jpg';
import Image32 from '../../../public/images/card/img-32.jpg';
import Image33 from '../../../public/images/card/img-33.jpg';
import Image34 from '../../../public/images/card/img-34.jpg';
import Image35 from '../../../public/images/card/img-35.jpg';
import Image36 from '../../../public/images/card/img-36.jpg';
import Image37 from '../../../public/images/card/img-37.jpg';
import Image38 from '../../../public/images/card/img-38.jpg';
import Image39 from '../../../public/images/card/img-39.jpg';
import Image40 from '../../../public/images/card/img-40.jpg';

const imageArray = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image27,
  Image28,
  Image29,
  Image30,
  Image31,
  Image32,
  Image33,
  Image34,
  Image35,
  Image36,
  Image37,
  Image38,
  Image39,
  Image40,
];
interface CardProps {
  title: string;
  image: string;
  grams: number;
  info: string;
  price: number;
  oldPrice: number | null;
  types: Array<cardTypes>;
  id: number | null;
  checkItemOfCard?: Function;
}

interface cardTypes {
  title: string;
  price: number;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  grams,
  info,
  price,
  oldPrice,
  types,
  id,
  checkItemOfCard,
}) => {
  const navigate = useNavigate();

  const { FetchAddCart } = useAction();

  const toAboutItem = (): void => {
    navigate(`/виды/${id}`);
  };

  const items = useTypedSelector(({ Cart }) => {
    return Object.keys(Cart.items)
      .map((key) => {
        return Cart.items[key].item;
      })
      .some((item) => item.id === id);
  });

  const onAddCart = () => {
    const newId = id ? id : -1;
    const obj: IItems = { title, image, price, grams, id: newId };
    FetchAddCart(obj);

    checkItemOfCard ? checkItemOfCard(!!items) : null;
  };

  return (
    <li className={cl.card}>
      <div className={cl.InfoBlock}>
        <img src={imageArray[id ? id - 1 : 0]} alt="item" />
        <h3 className={cl.title}>{title}</h3>
        <span className={cl.grams}>{`${grams} г`}</span>
        <p className={cl.text}>{info}</p>
      </div>
      <div>
        {types !== null ? (
          <div className={cl.price}>
            <div>
              <p className={cl.lessPrice}>{`${types ? types[0].price : null} ₽ –`}</p>
              <p className={cl.price}>{`${types ? types[types.length - 1].price : null} ₽`}</p>
            </div>
            <button onClick={toAboutItem} className={cl.btnType}>
              <span>{`${types?.length} вида`}</span>
            </button>
          </div>
        ) : (
          <div className={cl.price}>
            {oldPrice ? (
              <div>
                <p className={cl.oldPrice}>{`${oldPrice} ₽`}</p>
                <p className={cl.price}>{`${price} ₽`}</p>
              </div>
            ) : (
              <p className={cl.price}>{`${price} ₽`}</p>
            )}
            <button className={cl.btn} onClick={onAddCart}>
              <CartIcon viewBox="0 0 28 26" size={24} />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default memo(Card);

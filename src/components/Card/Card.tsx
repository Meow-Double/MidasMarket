import cl from './Card.module.scss';
import { useNavigate } from 'react-router-dom';
import { CartIcon } from 'ui/SvgIcons/Icons';
import { useAction, useTypedSelector } from 'hooks';
import { memo } from 'react';
import { IItems } from 'types/cart';
// import trst from "../../../public/images/card"
import { imageArray } from 'assets/Array';

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

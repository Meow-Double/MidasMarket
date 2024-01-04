import React, { useState } from "react";
import cl from "./CardType.module.scss";
import { useAction, useTypedSelector, useAlert } from "hooks";
import { Tooltip } from "ui";
import { IItems } from "types/cart";

interface typesProps {
  type: cardTypes;
  image: string;
  id: number;
  index: number;
  grams: number;
  onClick?: Function;
}

interface cardTypes {
  title?: string;
  price?: number;
}

const CardType: React.FC<typesProps> = ({ type, image, id, index, grams }) => {
  const [count, setCount] = useState(1);
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState(false);

  const { FetchAddCart } = useAction();

  const newId = Number(`${id}.${index + 1}`);

  const handlePlusCount = () => {
    localStorage.setItem(`${newId}`, `${count + 1}`);
    setCount((prev) => prev + 1);
  };
  const handleMinusCount = () => {
    localStorage.setItem(`${newId}`, `${count - 1}`);
    setCount((prev) => prev - 1);
  };

  const items = useTypedSelector(({ Cart }) => {
    return Object.keys(Cart.items)
      .map((key) => {
        return Cart.items[key].item;
      })
      .some((item) => item.id === newId);
  });

  // const items = useTypedSelector(({Cart}) => Cart.error)

  const onAddItemCart = () => {
    const obj: IItems = {
      title: type.title ? type.title : "ошибка загрузки...",
      price: type.price ? type.price : 0,
      image: image,
      grams: grams,
      id: newId,
    };
    FetchAddCart(obj);

    if (items) {
      setInfo(true);
    } else {
      setSuccess(true);
    }

    useAlert([setSuccess, setInfo], 1.2);
  };

  return (
    <>
      {<Tooltip text="Товар успешно изменён!" type="info" active={info} />}
      {<Tooltip text="Товар успешно добавлен!" type="success" active={success} />}

      <li className={cl.card}>
        <div>
          <h4>{type.title}</h4>
          <span className={cl.grams}>{grams} г</span>
        </div>
        <div className={cl.btn}>
          <div>
            <button
              className={cl.minus}
              onClick={handleMinusCount}
              disabled={count <= 1 ? true : false}
            >
              −
            </button>
            <span>{count}</span>
            <button
              className={cl.plus}
              onClick={handlePlusCount}
              disabled={count >= 10 ? true : false}
            >
              +
            </button>
          </div>
        </div>
        <div className={cl.price}>
          <span>{type.price} ₽</span>
          <button onClick={onAddItemCart}>Добавить</button>
        </div>
      </li>
    </>
  );
};

export default CardType;

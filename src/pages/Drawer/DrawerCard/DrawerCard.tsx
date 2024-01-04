import { CloseIcon } from "ui/SvgIcons/Icons";
import cl from "./DrawerCard.module.scss";
import { useEffect, useState } from "react";
import { useAction } from "hooks";
import {memo} from "react";

interface DrawerCardProps {
  title: string | null;
  price: number | null;
  image: string;
  grams: number;
  id: number;
}

const DrawerCard = memo(function DrawerCard({
  title,
  grams,
  price,
  image,
  id,
}:DrawerCardProps) {
  const [count, setCount] = useState<number>(1);

  const { RemoveItem, ChangeCount } = useAction();

  useEffect(() => {
    const countLocal = Number(localStorage.getItem(`${id}`));
    if (countLocal) {
      if(countLocal <= 10 && countLocal >= 1){
        setCount(countLocal);
        ChangeCount({id:id, count:countLocal})
      }else{
        localStorage.setItem(`${id}`, "1");
        setCount(1);
        ChangeCount({id:id, count:1})
      }
    }
  }, []);

  const handlePlusCount = () => {
    localStorage.setItem(`${id}`, `${count + 1}`);
    setCount((prev) => prev + 1);
    ChangeCount({id:id, count:count + 1})
  };
  const handleMinusCount = () => {
    localStorage.setItem(`${id}`, `${count - 1}`);
    setCount((prev) => prev - 1);
    ChangeCount({id:id, count:count - 1})
  };

  const onRemoveCartItem = () => {
    localStorage.removeItem(`${id}`);
    RemoveItem(id);
  };

  return (
    <li className={cl.card}>
      <div className={cl.info}>
        <img src={`./images/card/${image}`} alt="img" />
        <div>
          <h4>{title}</h4>
          <span className={cl.grams}>{grams} г</span>
        </div>
      </div>
      <span className={cl.price}>{price} ₽</span>
      <div className={cl.btn}>
        <div>
          <button
            className={cl.minus}
            onClick={handleMinusCount}
            disabled={count <= 1 ? true : false}
          >
            −
          </button>
          <span>{count} шт</span>
          <button
            className={cl.plus}
            onClick={handlePlusCount}
            disabled={count >= 10 ? true : false}
          >
            +
          </button>
        </div>
      </div>
      <span className={cl.price}>{count * (price ? price : 1)} ₽</span>
      <button className={cl.close} onClick={onRemoveCartItem}>
        <CloseIcon viewBox="0 0 17 17" />
      </button>
    </li>
  );
});

export default DrawerCard;

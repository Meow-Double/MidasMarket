import { useTypedSelector, useAction, useAlert } from "hooks";
import Card from "../../../components/Card/Card";
import cl from "./FrequentOrders.module.scss";
import { useEffect, useMemo, useState } from "react";
import { Tooltip } from "ui";

interface IFrequentOrdersProps {
  orderWith: number[];
}
const FrequentOrders: React.FC<IFrequentOrdersProps> = ({ orderWith }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { fetchItems } = useAction();

  useEffect(() => {
    fetchItems();
  }, []);

  const items = useTypedSelector(({ Items }) => Items.items).filter((item) => {
    for (let i = 0; i < orderWith?.length; i++) {
      if (orderWith[i] === item.id) return item;
    }
  });

  const checkItemOfCard = (item: boolean) => {
    if (item) {
      setError(true);
    } else {
      setSuccess(true);
    }

    useAlert([setSuccess, setError], 1.2);
  };

  const renderCard = useMemo((): JSX.Element[] => {
    return items.map((item) => (
      <Card key={item.id} {...item} checkItemOfCard={checkItemOfCard} />
    ));
  }, [items]);

  return (
    <>
      {<Tooltip text="Товар уже добавлен!" type="error" active={error} />}
      {
        <Tooltip
          text="Товар успешно добавлен!"
          type="success"
          active={success}
        />
      }
    <section className={cl.orders}>
      <h2>С этим блюдом часто заказывают:</h2>
      <ul>{renderCard}</ul>
    </section>
    </>

  );
};

export default FrequentOrders;

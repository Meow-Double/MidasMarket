import { useEffect, useMemo, useState } from "react";
import Card from "../../../components/Card/Card";
import cl from "./Menu.module.scss";
import { useTypedSelector, useAction, useAlert } from "../../../hooks";
import { LoaderCard } from "ui/LoaderCard/LoaderCard";
import { Tooltip } from "ui";


const Menu: React.FC = () => {
  const { items, loading } = useTypedSelector((state) => state.Items);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { fetchItems } = useAction();

  useEffect(() => {
    fetchItems("species.популярное=1");
  }, []);

  const renderMenuItems = useMemo((): JSX.Element[] => {
    if (loading) {
      return [...Array(12)].map((item, index) => <LoaderCard key={`${item}_${index}`} />);
    } else {
      return items.map((item) => (
        <Card
          key={item.id}
          {...item}
          checkItemOfCard={(item: boolean) => checkItemOfCard(item)}
        />
      ));
    }
  }, [items]);

  const checkItemOfCard = (item: boolean) => {
    if (item) {
      setError(true);
    } else {
      setSuccess(true);
    }

    useAlert([setSuccess, setError], 1.2);
  };

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
      <section className={cl.section}>
        <div className="container-fluid">
          <div className={cl.inner}>
            <h2 className="title">Популярные блюда</h2>
            <ul className={cl.menu}>{renderMenuItems}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

import BreadCrumbs from "ui/Breadcrumbs/BreadCrumbs";
import cl from "./Drawer.module.scss";
import { useTypedSelector } from "hooks";
import DrawerCard from "./DrawerCard/DrawerCard";
import EmptyCart from "./EmptyCart/EmptyCart";
import { useMemo } from "react";
import { LoaderCardDrawer } from "../../ui/LoaderCard/LoaderCard";

const Drawer = () => {
  const { items, totalPrice, length, loading } = useTypedSelector(
    (state) => state.Cart
  );
  const newItems = Object.keys(items).map((key) => items[key].item);

  const renderDrawerCard = useMemo((): JSX.Element[] => {
    if (loading) {
      return [...Array(3)].map((index) => <LoaderCardDrawer key={index} />);
    } else {
      return newItems.map((item) => <DrawerCard key={item.id} {...item} />);
    }
  }, [newItems]);

  return (
    <section>
      <div className="container">
        <div>
          <span className={cl.cartTtile}>
            <h1 className="title">корзина</h1>
            {length ? <span>{length} шт</span> : null}
          </span>
          <BreadCrumbs path={"/корзина"} />
          {newItems.length ? (
            <>
              <ul className={cl.names}>
                <li>Блюдо:</li>
                <li>Цена:</li>
                <li>Кол-во:</li>
                <li>Сумма:</li>
              </ul>
              <ul className={cl.drawer}>{renderDrawerCard}</ul>
              <div className={cl.payment}>
                  <span className={cl.promoTitle}>Применить промокод:</span>
                  <div className={cl.promo}>
                    <input type="text" />
                    <button>Применить</button>
                  </div>
                  <div className={cl.payInfo}>
                    <span>Итого к оплате:</span>
                    <span className={cl.payNumber}>{totalPrice} ₽</span>
                  </div>
                  <button className={cl.orderBtn}>Оформить заказ</button>
              </div>
            </>
          ) : loading ? (
            <ul className={cl.loader}>{renderDrawerCard}</ul>
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
    </section>
  );
};

export default Drawer;

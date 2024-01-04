import { FetchAddCart } from 'store/actions/cart';
import cl from './Header.module.scss';
import { CartIcon } from 'ui/SvgIcons/Icons';
import { IItems } from 'types/cart';


// const mainDish = {
//   "id": 13,
//   "image": "img-13.jpg",
//   "title": "Стейк из лосося с овощами",
//   "info": "Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи",
//   "grams": 430,
//   "price": 1200,
//   "oldPrice": null,
//   "desc": null,
//   "species": {
//     "горячие": true,
//     "популярное": true
//   },
//   "orderWith": null,
//   "path": null,
//   "types": null
// }

const Header: React.FC = () => {

  // const addCartItem = () => {
  //   const newId = mainDish.id ? mainDish.id : -1;
  //   const obj: IItems = { mainDish.title, mainDish.image, mainDish.price, mainDish.grams, id:newId};
  //   FetchAddCart(obj);
  // };

  return (
    <header>
      <div className="container-fluid">
        <div className={cl.inner}>
          <div className={cl.left}>
            <h4>Доставка готовой еды из фермерских продуктов!</h4>
            <div className={cl.dot}></div>
            <div className={cl.contacts}>
              <a className={cl.tel} href="#!">
                +7 (499) 841-67-29
              </a>
              <a className={cl.email} href="#!">
                delivery@midas.rest
              </a>
            </div>
          </div>
          <div className={cl.images}>
            <img
              // className={cl.main}
              src="./images/header/main-img.jpg"
              alt="image"
            />
            <div className={cl.dot}></div>
            <div className={cl.block}>
              <h4 className={cl.title}>Стейк из лосося с овощами</h4>
              <span className={cl.grams}>250 г</span>
              <p className={cl.text}>
                Нежный стейк дикого лосося, пропитанный соком и ароматом слегка обжаренных
                фермерских овощей
              </p>
              <div className={cl.price}>
                <p>1 200 ₽</p>
                {/* <button >
                  <CartIcon viewBox="0 0 28 26" size={24} />
                </button> */}
              </div>
            </div>
          </div>
          <div className={cl.decor}>
            <img src="./images/header/decor-img.png" alt="" />
            <h4 className={cl.title}>Тирамису</h4>
            <span className={cl.grams}>430 г</span>
            <div className={cl.price}>
              <p>370 ₽</p>
              {/* <button>
                <CartIcon viewBox="0 0 28 26" size={24} />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

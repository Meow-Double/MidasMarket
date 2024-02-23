import cl from './EmptyCart.module.scss';
import { Link } from 'react-router-dom';
import EmptyCartImage from '../../../../public/images/empty-cart.png';
const EmptyCart = () => {
  return (
    <div className={cl.info}>
      <img src={EmptyCartImage} alt="empty-cart" />

      <div>
        <span>У вас пустая корзина!</span>
        <span>Пожауйста, закажите что-нибудь</span>
      </div>

      <button>
        <Link to="/">Перейти в меню</Link>
      </button>
    </div>
  );
};

export default EmptyCart;

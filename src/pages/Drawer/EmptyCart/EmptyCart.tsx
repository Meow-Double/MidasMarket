import cl from "./EmptyCart.module.scss";
import {Link} from "react-router-dom"

const EmptyCart = () => {


    return (
        <div className={cl.info}>
            <img src="./images/empty-cart.png" alt="empty-cart" />

            <div>
                <span>У вас пустая корзина!</span>
                <span>Пожауйста, закажите что-нибудь</span>
            </div>

            <button>
                <Link to="/">Перейти в меню</Link>
            </button>
        </div>
    )
}


export default EmptyCart;
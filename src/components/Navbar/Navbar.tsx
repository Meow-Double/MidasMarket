import cl from "./Navbar.module.scss";
import { CartIcon, UserIcon, SearchIcon } from "ui/SvgIcons/Icons";
import { Dropdown } from "ui";
import { Link } from "react-router-dom";
import { useTypedSelector } from "hooks";
import { useMemo } from "react";
import Logo from "../../../public/images/logo.svg";

const navItems: string[] = [
  "АКЦИИ",
  "ГОРЯЧЕЕ",
  "ХОЛОДНОЕ",
  "СВЕЖАЯ ВЫПЕЧКА",
  "ДЕСЕРТЫ",
  "НАПИТКИ",
];

const Navbar: React.FC = () => {
  const length = useTypedSelector(({ Cart }) => Cart.length);

  const renderNavItems = useMemo((): JSX.Element[] => {
    return navItems.map((item, index) => {
      switch (index) {
        case 1: {
          return (
            <li className={cl.dropdownItem} key={item}>
              <Dropdown
                items={["Горячие блюда", "Супы", "Хинкали"]}
                isClickItem={item}
                path="меню/"
              />
            </li>
          );
        }
        case 2: {
          return (
            <li className={cl.dropdownItem} key={item}>
              <Dropdown
                items={["Холодные блюда", "Супы", "Салаты"]}
                isClickItem={item}
                path="меню/"
              />
            </li>
          );
        }
        default:
          return (
            <li key={item}>
              <Link to={`/меню/${item.toLocaleLowerCase()}`}>{item}</Link>
            </li>
          );
      }
    });
  }, []);

  return (
    <nav className={cl.header}>
      <div className="container">
        <div className={cl.inner}>
          <a href="#!">
            <img src={Logo} alt="logo" />
          </a>
          <ul className={cl.navItems}>{renderNavItems}</ul>

          <ul className={cl.socialItems}>
            <li className={cl.cart}>
              <Link to="/корзина">
                {length ? <span>{length}</span> : null}
                <CartIcon viewBox="0 0 26 24" size={24} />
              </Link>
            </li>
            <li>
              {/* <Link> */}
              <UserIcon />
              {/* </Link>           */}
            </li>
            <li>
              {/* <Link>               */}
              <SearchIcon />
              {/* </Link>             */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import cl from "./Footer.module.scss";

const navItems: string[] = ["Обратная связь", "Доставка", "Оплата", "Контакты"];

const Footer: React.FC = () => {
  const renderNavItems = (): JSX.Element[] => {
    return navItems.map((item) => (
      <li key={item}>
        <a href="#!">{item}</a>
      </li>
    ));
  };

  return (
    <footer className={cl.footer}>
      <div className="container">
        <div>
          <div className={cl.info}>
            <a href="#!">
              <img src="/images/logo.svg" alt="logo" />
            </a>
            <ul className={cl.items}>{renderNavItems()}</ul>
            <div className={cl.links}>
              <a className={cl.tel} href="#!">
                +7 (499) 841-67-29
              </a>
              <a className={cl.email} href="#!">
                delivery@midas.rest
              </a>
            </div>
          </div>
          <div className={cl.row}>
            <span>© 2009–2019, ООО «MIDAS», официальный сайт</span>
            <div className={cl.textPolicy}>
              <a href="#!">Политика конфиденциальности и оферта</a>
              <a href="#!">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

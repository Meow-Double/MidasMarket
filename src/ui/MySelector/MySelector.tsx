import { useEffect, useRef, useState } from "react";
import cl from "./MySelecor.module.scss";

interface MySelectProps {
  items: string[];
  getType:Function;
}
const MySelector: React.FC<MySelectProps> = ({ items, getType }) => {
  const arrayItems = items !== undefined ? items : ["названию"];

  const [activeItem, setActiveItem] = useState<string>(arrayItems[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectorRef = useRef(null);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const changeActiveItem = (item: string) => {
    setActiveItem(item);
  };

  const handleOutsideClick = (e: any) => {
    if (e.target.offsetParent !== selectorRef.current) {
      setIsOpen(false);
    }
  };


  useEffect(() => {
    getType(activeItem);
  }, [activeItem])

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  const renderList = (): JSX.Element[] => {
    return arrayItems.map((item) => (
      <li
        key={item}
        onClick={() => changeActiveItem(item)}
        className={activeItem === item ? cl.disabled : ""}
      >
        {item}
      </li>
    ));
  };

  return (
    <div className={cl.select} ref={selectorRef}>
      <button onClick={handleOpen} className={cl.selectActive}>
        {activeItem}
      </button>
      <ul className={`${cl.selectList} ${isOpen ? cl.active : ""}`}>
        {renderList()}
      </ul>
    </div>
  );
};

export default MySelector;

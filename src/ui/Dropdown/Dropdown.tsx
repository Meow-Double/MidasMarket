import cl, { dropdown } from "./Dropdown.module.scss";
import { useState, memo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


interface DropdownProps {
  items?: string[];
  isClickItem?: any;
  path?:string;
}

const Dropdown = memo(function Dropdown({
  items,
  isClickItem,
  path,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef: any = useRef(null);

  const onChangeOpen = (): void => {
    setIsOpen((prev) => !prev);
  };

  const renderItems = (): JSX.Element[] | undefined => {
    return items?.map((item) => (
      <li key={item}>
        <Link to={`${path}${item.toLowerCase()}`}>{item}</Link>
      </li>
    ));
  };

  const handleOutsideClick = (e: any) => {
    if (e.target.offsetParent !== dropdownRef.current.offsetParent) {
        setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={dropdownRef}>
      {isClickItem && (
        <span
          className={`${cl.text} ${isOpen ? cl.arrowOpen : ""}`}
          onClick={onChangeOpen}
        >
          {isClickItem}
        </span>
      )}
      <ul className={`${cl.dropdown} ${isOpen ? cl.open : ""}`}>
        {renderItems()}
      </ul>
    </div>
  );
});


export default Dropdown;
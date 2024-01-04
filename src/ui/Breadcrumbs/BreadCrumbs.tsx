import { useLocation, Link } from "react-router-dom";
import { memo } from "react";
import cl from "./BreadCrumbs.module.scss";

interface IBreadcrumbsProps {
  path?: string | null | undefined;
}

const BreadCrumbs = memo(function BreadCrumbs({ path }: IBreadcrumbsProps) {
  const location = useLocation();

  let currentLink: string = "";

  const crumbs: string[] = (path ? path : location.pathname)
    .split("/")
    .filter((crumb) => crumb !== "");

  const renderCrumbs = (): JSX.Element[] => {
    return crumbs.map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <li className={cl.link} key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </li>
      );
    });
  };

  return (
    <nav>
      <ul className={cl.breadcrumbs}>
        <li className={cl.link}>
          <Link to="/">Главная</Link>
        </li>
        {renderCrumbs()}
      </ul>
    </nav>
  );
});

export default BreadCrumbs;

import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        Rental<span className={css.logo__span}>Car</span>
      </p>
      <ul className={css.menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(css.menu__item, isActive && css.active)
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              clsx(css.menu__item, isActive && css.active)
            }
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

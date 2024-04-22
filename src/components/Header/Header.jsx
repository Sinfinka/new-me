import { Link, NavLink } from "react-router-dom";
// import logo from "../../img/logo.png";
import clsx from "clsx";
import css from "./Header.module.css";
import { BsFillHeartPulseFill } from "react-icons/bs";

const addActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

//<span> Alanya</span>

function Header() {
  return (
    <div className={css.nav}>
      <Link  className={css.logoLink} to="/"> <BsFillHeartPulseFill className={css.logoHeart}/>  <p className={css.logoName}>NewMe </p>
      </Link>
      <nav className={css.nav}>
        <NavLink className={addActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={addActiveClass} to="/services">
          Services
        </NavLink>
        <NavLink className={addActiveClass} to="/about">
          About Us
        </NavLink>
        <NavLink className={addActiveClass} to="/price">
          Price
        </NavLink>
        <NavLink className={addActiveClass} to="/contacts">
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;

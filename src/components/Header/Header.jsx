import { Link } from "react-router-dom";
import "./Header.scss";
import AccountIcon from "../../images/icons/AccountIcon";

export default function Header() {
  return (
    <header className="header">
      <span className="header__logo">
        YourC<span>omp</span>
      </span>

      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li className="header__nav__ul__li">
            <Link to="/" className="header__nav__ul__li__link active">
              Поиск
            </Link>
          </li>
          <li className="header__nav__ul__li">
            <Link to="#" className="header__nav__ul__li__link">
              Главная
            </Link>
          </li>
          <li className="header__nav__ul__li">
            <Link to="#" className="header__nav__ul__li__link">
              Избранное
            </Link>
          </li>
        </ul>
      </nav>

      <button className="header__loginBtn">
        Войти
        <AccountIcon />
      </button>
    </header>
  );
}

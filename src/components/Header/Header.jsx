import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header () {
    return <header className='header'>
            <span className='header__logo'>
                YourC<span>omp</span>
            </span>

            <nav className='header__nav'>
                <ul>
                    <li className='header__nav__li'>
                        <NavLink to="/">
                        Поиск
                        </NavLink>
                    </li>
                    <li className='header__nav__li'>
                        <NavLink to="/#">
                        Главная
                        </NavLink>
                    </li>
                    <li className='header__nav__li'>
                        <NavLink to="/#">
                        Избранное
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <button className='header__loginBtn'>
                Войти
                <span className='header__loginBtn__icon' />
            </button>
    </header>
}
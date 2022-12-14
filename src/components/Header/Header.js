import styles from './Header.module.scss';
import cookchef from '../../assets/images/cookchef.png';
import { useState } from 'react';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { NavLink } from 'react-router-dom';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header
            className={`${styles.header} d-flex flex-row align-items-center`}
        >
            <div className="flex-fill">
                <NavLink to="/">
                    <img src={cookchef} alt="logo cookchef" />
                </NavLink>
            </div>
            <ul className={styles.headerList}>
                <NavLink to="admin">
                    <button className="btn btn-primary mr-15">Admin</button>
                </NavLink>
                <NavLink>
                    <button className="mr-15 btn btn-reverse-primary">
                        <i className="fa-solid fa-heart mr-5"></i>
                        <span>Wishlist</span>
                    </button>
                </NavLink>
                <NavLink to="signup">
                    <button className="btn btn-primary mr-15">
                        Inscription
                    </button>
                </NavLink>
                <NavLink to="login">
                    <button className="btn btn-primary">connexion</button>
                </NavLink>
            </ul>
            <i
                onClick={() => setShowMenu(true)}
                className={`fa-solid fa-bars ${styles.headerXs}`}
            ></i>
            {showMenu && (
                <>
                    <div
                        onClick={() => setShowMenu(false)}
                        className="calc"
                    ></div>
                    <HeaderMenu />
                </>
            )}
        </header>
    );
}

export default Header;

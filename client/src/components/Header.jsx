import '../styles/Header.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoNegro from '../images/Copy of logo-negro.png';

const Header = () => {
    const [showList, setShowList] = useState(false);
    const { pathname } = useLocation();

    const optionActive = {
        home: pathname === '/',
        menu: pathname === '/menu',
        aboutus: pathname === '/aboutus',
        contact: pathname === '/contact',
        catering: pathname === '/catering',
        reservations: pathname === '/reservaciones',
    };

    const styles = classNames('header-list__menu-list', {
        'header-list__menu-list--responsive': showList,
    });

    const navItems = [
        { to: '/', label: 'Inicio', active: optionActive.home },
        { to: '/menu', label: 'Menú', active: optionActive.menu },
        { to: '/aboutus', label: 'Nosotros', active: optionActive.aboutus },
        { to: '/contact', label: 'Contacto', active: optionActive.contact },
        { to: '/catering', label: 'Catering', active: optionActive.catering },
        { to: '/reservaciones', label: 'Reservas', active: optionActive.reservations },
    ];

    return (
        <header className='header'>
            <div className='header__header-container'>
                <div className='header-logo'>
                    <Link to='/' aria-label='Ir al inicio'>
                        <img src={logoNegro} alt='Simonetta logo' className='header-logo__image' />
                    </Link>
                </div>

                <div className='header-list-container'>
                    <nav className={styles} aria-label='Navegación principal'>
                        <ul onClick={() => setShowList(false)}>
                            {navItems.map(({ to, label, active }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className={classNames({
                                            'header-list__option-isActive': active,
                                        })}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        type='button'
                        className='header-container__icon'
                        aria-label='Abrir menú'
                        onClick={() => setShowList(!showList)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
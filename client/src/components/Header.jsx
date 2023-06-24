import '../styles/Header.scss';
import classNames from "classnames";
import SimonettaLogo from '../images/logorect.png';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [ showList, setShowList ] = useState(false);
    const { pathname } = useLocation();
    const optionActive = {
        home: pathname === '/' ? true : false,
        menu: pathname === '/menu' ? true : false,
        aboutus: pathname === '/aboutus' ? true : false,
        contact: pathname === '/contact' ? true : false
    };

    const styles = classNames('header-list__menu-list', { 'header-list__menu-list--responsive': showList });

    return (
        <div className="header">
            <div className="header__header-container">
                <div className='header-logo'>
                 <img src={SimonettaLogo} alt='Simonetta-Logo' className='header__logo-image'></img>
                </div>
                <div className='header-list-container'>
                    <div className={styles}>
                        <ul onClick={() => setShowList(false)}>
                            <Link to="/" className={classNames({'header-list__option-isActive': optionActive.home })}>Inicio</Link>
                            <Link to="/menu" className={classNames({'header-list__option-isActive': optionActive.menu })}>Menú</Link>
                            <Link to="/aboutus" className={classNames({'header-list__option-isActive': optionActive.aboutus })}>Nosotros</Link>
                            <Link to="/contact" className={classNames({'header-list__option-isActive': optionActive.contact })}>Contacto</Link>
                        </ul>
                    </div>
                    <div className="header-container__icon" onClick={() => setShowList(!showList)}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
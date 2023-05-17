import '../styles/Header.scss';
import classNames from "classnames";
import SimonettaLogo from '../images/logorect.png';
import { useState } from "react";

const Header = () => {
    const [ showList, setShowList ] = useState(false);
    const styles = classNames('header-list__menu-list', { 'header-list__menu-list--responsive': showList });

    return (
        <div className="header">
            <div className="header__header-container">
                <div className='header-logo'>
                 <img src={SimonettaLogo} alt='Simonetta-Logo' className='header__logo-image'></img>
                </div>
                <div className='header-list-container'>
                    <div className={styles}>
                        <ul>
                            <li>Menú</li>
                            <li>Nosotros</li>
                            <li>Contacto</li>
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
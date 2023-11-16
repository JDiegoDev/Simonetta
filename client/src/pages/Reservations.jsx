import '../styles/Reservations.scss';
import { useEffect, useLayoutEffect } from 'react';
import Image10 from '../images/image10.jpg';
import Image8 from '../images/image8.jpg';

const Reservations = ()  => {
    useEffect(() => {
        const container = document.getElementById('open-table-container');
        const script = document.createElement('script');
        script.src = "https://www.opentable.com.mx/widget/reservation/loader?rid=1336150&type=standard&theme=tall&color=2&dark=false&iframe=true&domain=commx&lang=es-MX&newtab=false&ot_source=Restaurant%20website&cfe=true";
        script.async = true;
        container.appendChild(script);

        return () => {
            container.removeChild(script);
        }
    },[]);

    return (
        <div className="reservations-container">
            <div className="reservations-img-panel">
                <img src={Image10} alt='Simonetta-Logo' className=''></img>
            </div>
            <div className='reservations-open-table-panel' id='open-table-container' />
            <div className="reservations-img-panel">
                <img src={Image8} alt='Simonetta-Logo' className=''></img>
            </div>
        </div>
    );
}

export default Reservations;
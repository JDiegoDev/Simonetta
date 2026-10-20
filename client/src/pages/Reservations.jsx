import '../styles/Reservations.scss';
import { useEffect } from 'react';
import Image10 from '../images/image10.jpg';
import Image8 from '../images/image8.jpg';

const Reservations = () => {
    useEffect(() => {
        const container = document.getElementById('open-table-container');
        if (!container) return undefined;

        const script = document.createElement('script');
        script.src = 'https://www.opentable.com.mx/widget/reservation/loader?rid=1336150&type=standard&theme=tall&color=2&dark=false&iframe=true&domain=commx&lang=es-MX&newtab=false&ot_source=Restaurant%20website&cfe=true';
        script.async = true;
        container.appendChild(script);

        return () => {
            if (container.contains(script)) {
                container.removeChild(script);
            }
        };
    }, []);

    return (
        <main className='reservations'>
            <div className='reservations__container'>
                <div className='reservations__image-panel'>
                    <img src={Image10} alt='Interior de Simonetta Bistro' />
                </div>

                <section className='reservations__booking'>
                    <p className='reservations__eyebrow'>Reservas</p>
                    <h1>Haz tu reserva</h1>
                    <div className='reservations__widget' id='open-table-container' />
                </section>

                <div className='reservations__image-panel'>
                    <img src={Image8} alt='Detalle gastronómico de Simonetta Bistro' />
                </div>
            </div>
        </main>
    );
};

export default Reservations;
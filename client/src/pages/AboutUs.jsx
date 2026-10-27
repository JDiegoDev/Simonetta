import '../styles/AboutUs.scss';
import image from '../images/Nosotros.jpg';

const AboutUs = () => {
    return (
        <main className='about-us'>
            <div className='about-us__container'>
                <div className='about-us__image-container'>
                    <img src={image} alt='Simonetta Bistro interior' />
                </div>

                <div className='about-us__legend-container'>
                    <h1 className='about-us__title'>Nosotros</h1>
                    <div className='about-us__description'>
                        <p>
                            Ubicado en el corazón de Polanco, <span>Simonetta Bistro</span> es el
                            destino ideal para disfrutar de los mejores platillos del momento a
                            cualquier hora del día. El menú se basa en ingredientes de temporada y
                            presenta una cocina de autor refinada y platos dinámicos para elevar la
                            experiencia gastronómica de los comensales.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;
import '../styles/AboutUs.scss';
import image from '../images/image5.png';

const AboutUs = () => {
    return (
        <div className="about-us__container">
            <div className='about-us__image-container'>
                <img src={image} alt='about-us-image'></img>
            </div>
            <div className='about-us__legend-container'>
                <div className='about-us__title'>Nosotros</div>
                <div className='about-us__description'>
                    <p>
                        Ubicado en el corazón de Polanquito,
                        <span> Simonetta Bistro</span> es el lugar ideal para disfrutar a cualquier hora del día de los mejores platillos del momento.
                        El menú de Simonetta se centra en ingredientes de temporada e
                        Impulsados por el mercado, que aportan sabores audaces al frente de la experiencia gastronómica de los comensales.
                        El menú presenta una cocina de autor refinada y platos dinámicos, ofreciendo algo para todos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
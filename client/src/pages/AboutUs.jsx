import '../styles/AboutUs.scss';
import image from '../images/image5.png';

const AboutUs = () => {
    return (
        <main className='about-us'>
            <div className='about-us__container'>
                <div className='about-us__image-container'>
                    <img src={image} alt='Simonetta Bistro interior' />
                </div>

                <div className='about-us__legend-container'>
                    <p className='about-us__eyebrow'>Nosotros</p>
                    <h1 className='about-us__title'>Un bistro con identidad propia.</h1>
                    <div className='about-us__description'>
                        <p>
                            En el corazón de Polanco, <span>Simonetta Bistro</span> nació para
                            acompañar cada momento del día con buena comida, un ambiente cálido y
                            una atención cercana.
                        </p>
                        <p>
                            Nuestra cocina combina ingredientes de temporada, técnica y un toque
                            creativo para ofrecer platillos que celebran el sabor auténtico sin
                            perder la elegancia.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;
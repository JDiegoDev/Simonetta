import image from '../images/Contacto.jpg';
import '../styles/Contact.scss';

const Contact = () => {
    return (
        <main className='contact'>
            <div className='contact__container'>
                <div className='contact__image-container'>
                    <img src={image} alt='Simonetta Bistro cocktail' />
                </div>

                <div className='contact__info-container'>
                    <h1 className='contact__title'>Contacto</h1>
                    <div className='contact__divider' />

                    <div className='contact__row'>
                        <span className='contact__icon contact__icon--pin'>•</span>
                        <a href='https://goo.gl/maps/Aey42uuYbAAnSeFY7' target='_blank' rel='noreferrer'>
                            Virgilio 9, Polanco, III sección, Miguel Hidalgo, Ciudad de México
                        </a>
                    </div>

                    <div className='contact__row'>
                        <span className='contact__icon contact__icon--clock'>◔</span>
                        <div className='contact__hours'>
                            <p>8:30 a.m. - 10:00 p.m | Lunes a miércoles</p>
                            <p>8:30 a.m. - 11:00 p.m | Jueves a sábado</p>
                            <p>9:00 a.m. - 7:00 p.m | Domingo</p>
                        </div>
                    </div>

                    <div className='contact__row'>
                        <span className='contact__icon contact__icon--insta'>◌</span>
                        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                            @simonettabistromx
                        </a>
                    </div>

                    <div className='contact__row'>
                        <span className='contact__icon contact__icon--mail'>✉</span>
                        <a href='mailto:gerencia@simonettabistro.com'>
                            gerencia@simonettabistro.com
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
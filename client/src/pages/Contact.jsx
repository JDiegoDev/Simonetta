import image from '../images/image6.jpg';
import '../styles/Contact.scss';

const Contact = () => {
    return (
        <main className='contact'>
            <div className='contact__container'>
                <div className='contact__image-container'>
                    <img src={image} alt='Simonetta Bistro exterior' />
                </div>

                <div className='contact__info-container'>
                    <div className='contact__header'>
                        <p className='contact__eyebrow'>Contacto</p>
                        <h1 className='contact__title'>Nos encantaría verte.</h1>
                    </div>

                    <div className='contact__address'>
                        <a href='https://goo.gl/maps/Aey42uuYbAAnSeFY7' target='_blank' rel='noreferrer'>
                            H, Virgilio 9, Polanco, Miguel Hidalgo, 11550 Ciudad de México
                        </a>
                    </div>

                    <div className='contact__hours'>
                        <div className='contact__hours-title'>Horario</div>
                        <div className='contact__hours-dates'>
                            <p>8:30 AM - 10:00 PM | Lun - Mar - Mier</p>
                            <p>8:30 AM - 12:00 PM | Jue - Vie - Sab</p>
                            <p>8:30 AM - 7:00 PM | Dom</p>
                        </div>
                    </div>

                    <div className='contact__form'>
                        <form action='mailto:contacto@simonettabistro.com'>
                            <input type='text' name='subject' placeholder='Asunto' />
                            <textarea name='body' placeholder='Mensaje' rows='5' />
                            <div className='contact__form-button'>
                                <input type='submit' value='Enviar' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
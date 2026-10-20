import '../styles/HomePage.scss';
import { Link } from 'react-router-dom';
import { ImageData } from '../utils/HomeImageSlides';

const Home = () => {
    const featuredImage = ImageData[0]?.src;
    const heroVideo = null; // set this to your exported MP4 URL or local/public video asset

    return (
        <main className='home-page'>
            <section className='hero'>
                <div className='hero__content'>
                    <p className='hero__eyebrow'>Bistro • Brunch • Café</p>
                    <h1>Una experiencia cálida, elegante y cotidiana.</h1>
                    <p className='hero__description'>
                        Simonetta combina cocina de temporada, ambiente íntimo y atención
                        cercana para cada momento del día.
                    </p>

                    <div className='hero__actions'>
                        <Link to='/menu' className='hero__button hero__button--primary'>
                            Ver menú
                        </Link>
                        <Link to='/reservaciones' className='hero__button hero__button--secondary'>
                            Reservar
                        </Link>
                    </div>
                </div>

                <div className='hero__visual'>
                    {heroVideo ? (
                        <video
                            className='hero__video'
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={featuredImage}
                        >
                            <source src={heroVideo} type='video/mp4' />
                        </video>
                    ) : (
                        <img src={featuredImage} alt='Simonetta Bistro' />
                    )}
                </div>
            </section>

            <section className='home-page__highlights'>
                <article className='highlight-card'>
                    <span className='highlight-card__label'>Breakfast</span>
                    <h2>Desayunos con identidad</h2>
                    <p>Desde café especial hasta opciones dulces y saladas con sabor auténtico.</p>
                </article>

                <article className='highlight-card'>
                    <span className='highlight-card__label'>Lunch</span>
                    <h2>Comidas de temporada</h2>
                    <p>Platos equilibrados, frescos y pensados para disfrutar sin prisa.</p>
                </article>

                <article className='highlight-card'>
                    <span className='highlight-card__label'>Ambiente</span>
                    <h2>Un lugar para volver</h2>
                    <p>Materiales cálidos, música suave y una sensación íntima desde la primera visita.</p>
                </article>
            </section>
        </main>
    );
};

export default Home;
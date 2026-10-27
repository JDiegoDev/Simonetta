import '../styles/Catering.scss';

const Catering = () => {
  return (
    <main className='catering-page'>
      <video
        className='catering-page__video'
        autoPlay
        muted
        loop
        playsInline
        poster=''
      >
        <source src='/videos/CATERING.mp4' type='video/mp4' />
      </video>

      <div className='catering-page__overlay' />

      <div className='catering-page__content'>
        <div className='catering-page__top-links'>
          <span>Catering</span>
          <span>Delivery</span>
        </div>

        <h1>Contáctanos para tus próximos eventos</h1>

        <p>
          Desayunos corporativos,<br />
          brunch empresarial,<br />
          working lunch y más.
        </p>

        <div className='catering-page__cta'>
          <span>¡Comparte tu información con nosotros!</span>
        </div>
      </div>
    </main>
  );
};

export default Catering;

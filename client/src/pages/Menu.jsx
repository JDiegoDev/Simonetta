import '../styles/Menu.scss';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.jpg';

const breakfastMenu = [
    { label: 'Dulce', image: image1, href: '/files/menu/desayunos-v2.pdf' },
    { label: 'Salado', image: image2, href: '/files/menu/desayunos-v2.pdf' },
    { label: 'Saludable', image: image3, href: '/files/menu/desayunos-v2.pdf' },
    { label: 'Especialidades\nde la casa', image: image4, href: '/files/menu/desayunos-v2.pdf' },
    { label: 'Café y pan', image: image5, href: '/files/menu/desayunos-v2.pdf' },
    { label: 'Postres', image: image6, href: '/files/menu/desayunos-v2.pdf' },
];

const lunchMenu = [
    { label: 'Entradas', image: image1, href: '/files/menu/comidas-v2.pdf' },
    { label: 'Sopas', image: image2, href: '/files/menu/comidas-v2.pdf' },
    { label: 'Pastas', image: image6, href: '/files/menu/comidas-v2.pdf' },
    { label: 'Ensaladas y\nbowls', image: image3, href: '/files/menu/comidas-v2.pdf' },
    { label: 'Fuertes', image: image4, href: '/files/menu/comidas-v2.pdf' },
    { label: 'Coctelería', image: image5, href: '/files/menu/comidas-v2.pdf' },
];

const Menu = () => {
    return (
        <main className='menu-page'>
            <section className='menu-page__section'>
                <h2 className='menu-page__title'>Desayunos &amp; brunch</h2>
                <div className='menu-page__grid'>
                    {breakfastMenu.map(({ label, image, href }) => (
                        <a key={label} href={href} target='_blank' rel='noreferrer' className='menu-page__item'>
                            <img src={image} alt={label} />
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </section>

            <section className='menu-page__section menu-page__section--second'>
                <h2 className='menu-page__title'>Comidas y cenas</h2>
                <div className='menu-page__grid'>
                    {lunchMenu.map(({ label, image, href }) => (
                        <a key={label} href={href} target='_blank' rel='noreferrer' className='menu-page__item'>
                            <img src={image} alt={label} />
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Menu;
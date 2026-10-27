import '../styles/Menu.scss';
import dulce from '../images/Dulce.jpg';
import salado from '../images/Salado.jpg';
import saludable from '../images/Saludable.jpg';
import especialidades from '../images/Especialidades.jpg';
import cafeYPan from '../images/Café y pan.jpg';
import postres from '../images/Postres.jpg';
import entradas from '../images/Entradas.jpg';
import sopas from '../images/Sopas.jpg';
import pastas from '../images/Pastas.jpg';
import ensaladasBowls from '../images/Ensaladas y bowls.jpg';
import fuertes from '../images/Fuertes.jpg';
import cocteleria from '../images/Coctelería.jpg';

const breakfastMenu = [
    { label: 'Dulce', image: dulce, href: '/files/menu/desayunos-v2.pdf' },
    { label: 'Salado', image: salado, href: '/files/menu/desayunos-v2.pdf' },
    { label: 'Saludable', image: saludable, href: '/files/menu/desayunos-v2.pdf' },
    { label: 'Especialidades\nde la casa', image: especialidades, href: '/files/menu/desayunos-v2.pdf' },
    { label: 'Café y pan', image: cafeYPan, href: '/files/menu/desayunos-v2.pdf' },
    { label: 'Postres', image: postres, href: '/files/menu/desayunos-v2.pdf' },
];

const lunchMenu = [
    { label: 'Entradas', image: entradas, href: '/files/menu/comidas-v2.pdf' },
    { label: 'Sopas', image: sopas, href: '/files/menu/comidas-v2.pdf' },
    { label: 'Pastas', image: pastas, href: '/files/menu/comidas-v2.pdf' },
    { label: 'Ensaladas y\nbowls', image: ensaladasBowls, href: '/files/menu/comidas-v2.pdf' },
    { label: 'Fuertes', image: fuertes, href: '/files/menu/comidas-v2.pdf' },
    { label: 'Coctelería', image: cocteleria, href: '/files/menu/comidas-v2.pdf' },
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
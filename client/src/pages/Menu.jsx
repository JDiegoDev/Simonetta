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

const pdfUrl = '/files/menu/MENU-2026.pdf';

const breakfastMenu = [
    { label: 'Dulce', image: dulce, href: pdfUrl },
    { label: 'Salado', image: salado, href: pdfUrl },
    { label: 'Saludable', image: saludable, href: pdfUrl },
    { label: 'Especialidades\nde la casa', image: especialidades, href: pdfUrl },
    { label: 'Café y pan', image: cafeYPan, href: pdfUrl },
    { label: 'Postres', image: postres, href: pdfUrl },
];

const lunchMenu = [
    { label: 'Entradas', image: entradas, href: pdfUrl },
    { label: 'Sopas', image: sopas, href: pdfUrl },
    { label: 'Pastas', image: pastas, href: pdfUrl },
    { label: 'Ensaladas y\nbowls', image: ensaladasBowls, href: pdfUrl },
    { label: 'Fuertes', image: fuertes, href: pdfUrl },
    { label: 'Coctelería', image: cocteleria, href: pdfUrl },
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
import { useState } from 'react';
import '../styles/Menu.scss';
import ToggleButton from '../components/common/ToggleButton';
import breakFastPreview from '../images/desayuno-preview.jpg';
import lunchPreview from '../images/comidas-preview.jpg';

const Menu = () => {
    const [ isEnglishMenu , setIsEnglishMenu ] =  useState(false);
    const logState = (state) => setIsEnglishMenu(state);


    return (
        <div className='menu'>
            <div className='menu__container'>
                {/* <div className='menu__container-language'>
                <ToggleButton label="English" toggled={false} onClick={logState} />
                </div> */}
                <div className='menu__container-options'>
                    <div className='menu__image-container'>
                        <h1>Desayunos</h1>
                        <a
                            alt='breakfast-preview'
                            href="https://www.simonettabistro.com/files/menu/desayunos-v2.pdf"
                        >
                            <img src={breakFastPreview}></img>
                        </a>
                    </div>
                    <div className='menu__image-container'>
                        <h1>Comidas & Cenas</h1>
                        <a
                            alt='lunch-preview'
                            href="https://www.simonettabistro.com/files/menu/comidas-v2.pdf"
                        >
                         <img src={lunchPreview}></img>
                        </a>
                    </div>
                </div>
            </div>      
        </div>
    );
}

export default Menu;
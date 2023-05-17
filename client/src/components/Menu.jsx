import { useState } from 'react';
import '../styles/Menu.scss';
import classNames from "classnames";
import { menuStates } from '../utils/MenuStates';

const Menu = () => {

    const [ selectedOption, setSelectedOption ] = useState(menuStates[0]);
    
    const clickedOption = value => setSelectedOption(value);

    return (
        <div className='menu'>
            <div className='menu__container'>
                <div className='menu__container-options'>
                    <ul className='menu__container-options-list'>
                        <li>
                            <h2 className='menu__container-options-list--header'>Menú</h2>
                            <hr className='menu__container-options-divider'></hr>
                        </li>
                        {
                            menuStates.map(menu => {
                                const { label, value } = menu;
                                return (
                                    <li
                                        className={classNames({
                                            'menu__container-options-list--item': true,
                                            'menu__container-options-list--selected': selectedOption.value === value, 
                                        })}
                                        key={value}
                                        onClick={() => clickedOption(menu)}>
                                        {label}
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className='menu__container-plates'>
                    </div>
                </div>
            </div>      
        </div>
    );
}

export default Menu;
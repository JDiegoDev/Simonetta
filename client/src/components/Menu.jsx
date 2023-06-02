import { useState } from 'react';
import '../styles/Menu.scss';
import classNames from "classnames";
import { mealsStates } from '../utils/Meals';
import MealsSection from './MealsSection';

const Menu = () => {

    const [ selectedOption, setSelectedOption ] = useState(mealsStates[0]);
    console.log('mealsStates', mealsStates);
    
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
                            mealsStates.map(menu => {
                                const { value, label } = menu;
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
                        {
                            mealsStates.map((menu) => {
                                const { mealType } = menu;
                                return <>
                                    <MealsSection mealType={mealType} key={menu.value} selectedOption={selectedOption} type={menu.value}/>
                                </>;
                            })
                        }
                    </div>
                </div>
            </div>      
        </div>
    );
}

export default Menu;
import { useState } from 'react';
import '../styles/Menu.scss';
import classNames from "classnames";
import { mealsStates } from '../utils/Meals';
import { englishMealsStates } from '../utils/EnglishMeals';
import MealsSection from '../components/MealsSection';
import ToggleButton from '../components/common/ToggleButton';

const Menu = () => {
    const [ selectedOption, setSelectedOption ] = useState(mealsStates[0]);
    const [ isEnglishMenu , setIsEnglishMenu ] =  useState(false);
    
    const clickedOption = value => setSelectedOption(value);

    const logState = (state) => setIsEnglishMenu(state);

    const mealsData = !isEnglishMenu ?  mealsStates : englishMealsStates;
    const listLabel = !isEnglishMenu ? 'Menú' : 'Menu';
    console.log('isEnglishMenu', isEnglishMenu);

    return (
        <div className='menu'>
            <div className='menu__container'>
                <div className='menu__container-language'>
                <ToggleButton label="English" toggled={false} onClick={logState} />
                </div>
                <div className='menu__container-options'>
                    <ul className='menu__container-options-list'>
                        <li>
                            <h2 className='menu__container-options-list--header'>{listLabel}</h2>
                            <hr className='menu__container-options-divider'></hr>
                        </li>
                        {
                            mealsData.map(menu => {
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
                            mealsData.map((menu) => {
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
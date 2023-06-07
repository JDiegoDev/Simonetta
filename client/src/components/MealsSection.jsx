import '../styles/MealsSection.scss';
import { memo } from "react";
import Meals from './Meals';
import classNames from "classnames";


const MealsSection = (props) => {
    const { mealType, selectedOption, type } = props;

    return (
        <div className={classNames('meals-section', {'meals-section__section--isActive': selectedOption.value === type})}>
            {
                mealType.map(type => {
                    return (
                        <div key={type.value} className='meals-section__container'>
                            <h4 className='meals-section__title'>{type.title}</h4>
                            <div className='meals-section__meals-container'>
                                {
                                    type.meals.map(meal => {
                                        return <Meals meal={meal} key={meal.value}/>
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default memo(MealsSection);
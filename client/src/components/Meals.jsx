import '../styles/Meals.scss';
import { memo } from "react";

const Meals = props => {
    console.log('props meal', props);
    const { label, detail } = props.meal;
    return (
        <div className='meals__section-item'>
            <h5>{label}</h5>
            <label>{detail}</label>
        </div>
    );
};

export default memo(Meals);
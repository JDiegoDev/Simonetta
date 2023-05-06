import '../styles/ComingSoon.scss';
import SimonettaLogo from '../images/SIMONETTALOGO.png';

const ComingSoon = () => {
    return (
        <div className='coming-soon'>
            <div className='coming-soon__image-container'>
                <img src={SimonettaLogo} alt='Simonetta-Logo' className='coming-soon__image'></img>
                <p>Coming Soon !</p>
            </div>
        </div>
    );
};

export default ComingSoon;
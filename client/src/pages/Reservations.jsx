import '../styles/Reservations.scss';
import Image10 from '../images/image10.jpg';
import Image8 from '../images/image8.jpg';

const Reservations = ()  => {
    return (
        <div className="reservations-container">
            <div className="reservations-img-panel">
                <img src={Image10} alt='Simonetta-Logo' className=''></img>
            </div>
            <div className='reservations-open-table-panel'>
            </div>
            <div className="reservations-img-panel">
                <img src={Image8} alt='Simonetta-Logo' className=''></img>
            </div>
        </div>
    );
}

export default Reservations;
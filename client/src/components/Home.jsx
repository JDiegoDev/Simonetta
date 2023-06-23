import '../styles/HomePage.scss';
import { ImageData } from '../utils/HomeImageSlides';
import SlideShow from './common/SlideShow';

const Home = () => {
    return <div className='home-page'>
        <SlideShow
            imageData={ImageData}
        />
    </div>
}

export default Home;
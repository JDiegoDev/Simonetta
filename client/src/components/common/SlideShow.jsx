import '../../styles/common/SlideShow.scss';
import { memo, useRef, useEffect, useState } from "react";


const SlideShow = props => {
    const { imageData } = props;
    const inputEl = useRef([]);
    const [ slideIndex, setSlideIndex ] = useState(0);

    const showSlides = () => {
        for (let i = 0; i < imageData.length; i++) {
            inputEl.current[i].style.display = 'none';  
        }

        setSlideIndex(slideIndex + 1);

        if (slideIndex >= imageData.length -1) {
            setSlideIndex(0);
        }   
        
        inputEl.current[slideIndex].style.display = 'block'
    };

    useEffect(() => {
        showSlides();
    }, [])

    useEffect(() => {
        const interval=  setInterval(() => {
            showSlides();
       }, 3500);

       return () => clearInterval(interval);

   }, [slideIndex]);


    return (
        <div className='slide-show__container'>
            { imageData && imageData.map((img, index) => {
                    return (
                        <div className='slide-show__slides slide-show__slides--fade' key={img.alt} ref={ref => { inputEl.current[index] = ref }}>
                            <picture>
                                    <source srcSet={img.srcResponsive} media="(max-width: 750px)" />
                                    <img className='slide-show__image' src={img.src} alt={img.alt}/>
                            </picture>  
                        </div>
                    )
                })
            }
                
        </div>
    );
}

export default memo(SlideShow);
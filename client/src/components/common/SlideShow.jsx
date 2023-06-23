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
                        <div className='slide-show__slides' key={img.alt} ref={ref => { inputEl.current[index] = ref }}>
                            <img className='slide-show__image' alt={img.alt} src={img.src}></img>
                        </div>
                    )
                })
            }
                
        </div>
    );
}

export default memo(SlideShow);
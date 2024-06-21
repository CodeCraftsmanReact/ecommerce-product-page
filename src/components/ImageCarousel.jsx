import React, { useEffect, useState } from 'react'
import imageProduct1 from '../assets/images/image-product-1.jpg'
import imageProduct2 from '../assets/images/image-product-2.jpg';
import imageProduct3 from '../assets/images/image-product-3.jpg';
import imageProduct4 from '../assets/images/image-product-4.jpg';
import next from '../assets/images/icon-next.svg';
import previous from '../assets/images/icon-previous.svg'

const ImageCarousel = () => {

    const data = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScrollF =  () => {
        if(currentIndex === data.length-1){
            return setCurrentIndex(0);
        }
        return setCurrentIndex( currentIndex + 1);
    }
    const carouselInfiniteScrollR =  () => {
        if(currentIndex === 0){
            return setCurrentIndex(data.length-1);
        }
        return setCurrentIndex( currentIndex - 1);
    }

  return (
    <div className='flex overflow-hidden relative'>
        {
            data.map((item, index) => {
                return(
                  
                    <img className='flex items-center justify-center min-w-full w-full transition-all' src={item} key={index} alt='product' style={{transform: `translate(-${currentIndex * 100 }%)`}}/> 
                   
                )

            })
        }
        <div onClick={()=> carouselInfiniteScrollF()} className='absolute top-0 right-0 bottom-0 w-32 z-10 flex items-center justify-end'>
           <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center mr-2'>
                <img src={next} alt='arrow'/>
            </div>
        </div>
        <div onClick={()=> carouselInfiniteScrollR()} className='absolute top-0 left-0 bottom-0 w-32 z-10 flex items-center justify-start'>
           <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center ml-2'>
                <img src={previous} alt='arrow'/>
           </div>
        </div>
    </div>
  )
}

export default ImageCarousel
import React, { useState } from 'react'
import imageProduct1 from '../assets/images/image-product-1.jpg'
import imageProduct2 from '../assets/images/image-product-2.jpg';
import imageProduct3 from '../assets/images/image-product-3.jpg';
import imageProduct4 from '../assets/images/image-product-4.jpg';
import image1Thumb from '../assets/images/image-product-1-thumbnail.jpg'
import image2Thumb from '../assets/images/image-product-2-thumbnail.jpg'
import image3Thumb from '../assets/images/image-product-3-thumbnail.jpg'
import image4Thumb from '../assets/images/image-product-4-thumbnail.jpg'
import next from '../assets/images/icon-next.svg';
import previous from '../assets/images/icon-previous.svg'

const ImageCarousel = () => {

    const data = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
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
    <div className="md:max-w-[40%]">
        <div onClick={() => setModalOpen(true)} className='flex overflow-hidden relative  md:rounded-lg cursor-pointer'>
            {
                data.map((item, index) => {
                    return(
                    
                        <img className='flex items-center  aspect-square justify-center transition-all ' src={item} key={index} alt='product' style={{transform: `translate(-${currentIndex * 100 }%)`}}/> 
                    
                    )

                })
            }
        
            <div onClick={()=> carouselInfiniteScrollF()} className='absolute md:hidden top-0 right-0 bottom-0 w-32 z-10 flex items-center justify-end'>
            <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center mr-2'>
                    <img src={next} alt='arrow'/>
                </div>
            </div>
            <div onClick={()=> carouselInfiniteScrollR()} className='absolute md:hidden top-0 left-0 bottom-0 w-32 z-10 flex items-center justify-start'>
            <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center ml-2'>
                    <img src={previous} alt='arrow'/>
            </div>
            </div>
        </div>
        <div className='hidden md:flex gap-4 mt-6'>
            <div onClick={()=>setCurrentIndex(0)} className={`${currentIndex === 0 && " border-4 border-orange-main border-solid"} overflow-hidden rounded-md hover:opacity-30 cursor-pointer`}>
                <img src={image1Thumb} alt='thumbnail' className={`${currentIndex === 0 && "opacity-30"}`} />
            </div>
            <div onClick={()=>setCurrentIndex(1)} className={`${currentIndex === 1 && " border-4 border-orange-main border-solid"} overflow-hidden rounded-md hover:opacity-30 cursor-pointer`}>
                <img src={image2Thumb} alt='thumbnail'  className={`${currentIndex === 1 && "opacity-30"}`}/>
            </div>
            <div onClick={()=>setCurrentIndex(2)} className={`${currentIndex === 2 && " border-4 border-orange-main border-solid"} overflow-hidden rounded-md hover:opacity-30 cursor-pointer`}>
                <img src={image3Thumb} alt='thumbnail' className={`${currentIndex === 2 && "opacity-30"}`}/>
            </div>
            <div onClick={()=>setCurrentIndex(3)} className={`${currentIndex === 3 && " border-4 border-orange-main border-solid"} overflow-hidden rounded-md hover:opacity-30 cursor-pointer`}>
                <img src={image4Thumb} alt='thumbnail' className={`${currentIndex === 3 && "opacity-30"}`}/>
            </div>
        </div>
       {
        modalOpen && (
            <div className='hidden md:flex flex-col absolute left-0 right-0 top-0 bottom-0 bg-black-lightbox z-20 justify-center items-center'>
            <div className="relative w-fit max-w-[30%]">
                 <div className='flex overflow-hidden relative w-full mx-auto md:rounded-lg'>
                     {
                         data.map((item, index) => {
                             return(
                                 
                                 <img className='flex items-center  aspect-square justify-center transition-all ' src={item} key={index} alt='product' style={{transform: `translate(-${currentIndex * 100 }%)`}}/> 
                                 
                             )
                         })
                     }
                 </div>
                 <div onClick={() => setModalOpen(false)} className='absolute right-0 -top-16 p-2 group cursor-pointer'>
                     <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" className='fill-[#69707D] group-hover:fill-orange-main' fill="#69707D" fill-rule="evenodd"/></svg>
                 </div>
                 <div onClick={()=> carouselInfiniteScrollF()} className='absolute top-0 -right-8 bottom-0 w-32 z-10 flex items-center cursor-pointer justify-end'>
                     <div className='h-16 w-16 bg-white rounded-full flex justify-center items-center group'>
                             {/* <img src={next} alt='arrow'/> */}
                             <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" className=' stroke-[#1D2026] group-hover:stroke-orange-main' stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                         </div>
                     </div>
                     <div onClick={()=> carouselInfiniteScrollR()} className='absolute top-0 -left-8 z-50 bottom-0 w-32 flex items-center cursor-pointer justify-start'>
                     <div className='h-16 w-16 bg-white rounded-full flex justify-center items-center group'>
                             {/* <img src={previous} alt='arrow' className='hover:stroke-orange-main'/> */}
                             <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" className=' stroke-[#1D2026] group-hover:stroke-orange-main' stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                     </div>
                     </div> 
             </div>
             <div className='hidden md:flex gap-4 mt-6'>
             <div onClick={()=>setCurrentIndex(0)} className={`${currentIndex === 0 && " border-4 border-orange-main border-solid"} bg-white h-fit overflow-hidden rounded-md cursor-pointer`}>
                 <img src={image1Thumb} alt='thumbnail' className={`${currentIndex === 0 && "opacity-30"} w-24  hover:opacity-30` } />
             </div>
             <div onClick={()=>setCurrentIndex(1)} className={`${currentIndex === 1 && " border-4 border-orange-main border-solid"} bg-white h-fit overflow-hidden rounded-md  cursor-pointer`}>
                 <img src={image2Thumb} alt='thumbnail'  className={`${currentIndex === 1 && "opacity-30"} w-24 hover:opacity-30`}/>
             </div>
             <div onClick={()=>setCurrentIndex(2)} className={`${currentIndex === 2 && " border-4 border-orange-main border-solid"} bg-white h-fit overflow-hidden rounded-md  cursor-pointer`}>
                 <img src={image3Thumb} alt='thumbnail' className={`${currentIndex === 2 && "opacity-30"} w-24 hover:opacity-30`}/>
             </div>
             <div onClick={()=>setCurrentIndex(3)} className={`${currentIndex === 3 && " border-4 border-orange-main border-solid"} bg-white h-fit overflow-hidden rounded-md  cursor-pointer`}>
                 <img src={image4Thumb} alt='thumbnail' className={`${currentIndex === 3 && "opacity-30"} w-24 hover:opacity-30`}/>
             </div>
             
         </div>
         </div>
        )
       }
    </div>
    
  )
}

export default ImageCarousel
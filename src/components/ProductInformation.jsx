import React from 'react'
import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'
import cart from '../assets/images/icon-cart.svg'
import blackCart from '../assets/images/icon-cart-black.svg'
const ProductInformation = ({count, setCount, setItemInCart}) => {
  

    const handleClick = (action) => {
        if(action === 'add'){
            setCount( count + 1);
            
        }else if(action==='sub' && count !== 0){
            setCount(count - 1);
            if(count === 1) setItemInCart(false);
        }
    }
  return (
    <div className='p-[25px] text-blue-darkgrey font-bold font-kumbh'>
        <div className='tracking-wider mb-2 text-xs'>SNEAKER COMPANY</div>
        <div className='w-[250px]'>
            <div className=' text-2xl mb-2 text-black-solid'>Fall Limited Edition Sneakers</div>
        </div>
        <div className='font-normal leading-6 mb-6'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber sole, they'll withstand everything the weather can offer.
        </div>
        <div className='flex gap-2 items-center mb-8 justify-between'>
            <div className='flex gap-2'>
                <div className='font-bold text-2xl text-black-solid tracking-wide'>$125.00</div>
                <div className='bg-black-solid rounded-lg w-fit flex justify-center items-center p-1 px-2 text-white'>50%</div>
            </div>
            <div className=' line-through'>
                $250.00
            </div>
        </div>
        <div className='bg-blue-lightgrey flex items-center mb-4 justify-between rounded-lg'>
            <div className='p-6' onClick={()=>handleClick('sub')}>
                <img src={minus} className={`${count === 0 && "opacity-25" }`} alt='minus'/>
            </div>
            <div className='text-black-solid'>{count}</div>
            <div className='p-6' onClick={()=>handleClick('add')}>
                <img src={plus} alt='plus'/>
            </div>
        </div>
        <button disabled={count===0} onClick={() => setItemInCart(true)} className='bg-orange-main w-full shadow-orange-pale shadow-2xl flex gap-4 font-extrabold text-blue-dark items-center justify-center p-3 rounded-lg'>
            <img className='fill-blue-dark' style={{width: 18, height: 16}} src={blackCart} alt='cart'/>
            <div>Add to cart</div>
        </button>
    </div>
  )
}

export default ProductInformation
import React, { useState } from 'react'
import HamburgerIcon from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import cartBlack from '../assets/images/icon-cart-black.svg'
import avatar from '../assets/images/image-avatar.png'
import iconClose from '../assets/images/icon-close.svg'
import product1Thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import iconDelete from '../assets/images/icon-delete.svg'
const Appbar = ({count, itemInCart,setItemInCart, setCount}) => {
    const [cartOpen, setCartOpen] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
   


  return (
    <>
        <div className='p-[22.5px] flex justify-between items-center absolute top-0 left-0 right-0 z-20 bg-white'>
            <div className='flex gap-[16px] h-[15px] '>
                <img src={HamburgerIcon} onClick={()=> setSidebarOpen(!sidebarOpen)} alt='menu icon'/>
                <img src={logo} alt='logo'/>
            </div>
            <div className='flex gap-[20px] h-[25px]'>
                <div className='relative'>
                    <div className={`${!itemInCart && "hidden"} absolute text-white font-bold -right-2 -top-2 h-4 w-4 flex justify-center items-center  text-xs bg-orange-main rounded-full'`}>
                        {count}
                    </div>
                    <img onClick={()=> setCartOpen(!cartOpen)} src={cartOpen ? cartBlack : cart} alt='checkout button'/>
                </div>
                <img src={avatar} alt='avatar' style={{width: 25, height: 25}}/>
            </div>
        </div>
        <div className={`absolute z-20 top-[80px] left-2 right-2 bg-white shadow-md p-4 px-4 rounded-md duration-300 transition-all ${!cartOpen  && "hidden"}`}>
            <div className='mb-6 font-bold'>Cart</div>
            <hr className='-mx-4'/>
            <div className={`min-h-[175px] ${!itemInCart && "flex justify-center items-center"} p-4 text-blue-darkgrey font-bold`}>
               <div className={`${(itemInCart &&  count !==0) && "hidden"}`}> Your Cart is empty.</div>
                <div className={`${(!itemInCart || count ===0)  && "hidden"}`}>
                    <div className='flex justify-around items-center gap-4 font-normal'>
                        <div className=' w-12 h-12 rounded overflow-hidden'>
                            <img src={product1Thumbnail} alt='product thumbnail'/>
                        </div>
                    
                        <div className='flex flex-col'>
                            <div>Fall Limited Edition Sneakers</div>
                            <div>$125.00 x {count} <span className='font-bold text-black-solid'>${count * 125}.00</span></div>
                        </div>
                        <div onClick={()=> {
                            setCount(0);
                            setItemInCart(false);
                        }}>
                            <img src={iconDelete} alt='delete'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
        <div className={`absolute ${sidebarOpen ? "translate-x-0" : "translate-x-[-100%]" } transition-all duration-300 left-0 w-[70%] h-full bg-white z-30 p-8`}>
           <div onClick={()=> setSidebarOpen(false)}>
                <img src={iconClose} alt='close'/>
           </div>
           <div className='font-bold text-black-solid flex flex-col gap-4 mt-12'>
            <div>Collections</div>
            <div>Men</div>
            <div>Woman</div>
            <div>About</div>
            <div>Contact</div>
           </div>
        </div>
    </>

  )
}

export default Appbar
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='flex items-center justify-between py-5 front-medium'>
            <img src={assets.logo1} className='w-25' alt="" />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className={'flex flex-col items-center gap-1 font-bold'}>
                    <p style={{ fontFamily: 'Playwrite VN, serif' }}>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className={'flex flex-col items-center gap-1 font-bold'}>
                    <p style={{ fontFamily: 'Playwrite VN, serif' }}>COLLECTIONS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className={'flex flex-col items-center gap-1 font-bold'}>
                    <p style={{ fontFamily: 'Playwrite VN, serif' }}>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contactus' className={'flex flex-col items-center gap-1 font-bold'}>
                    <p style={{ fontFamily: 'Playwrite VN, serif' }}>CONTACTUS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/login' className={'flex flex-col items-center gap-1 font-bold'}>
                    <p style={{ fontFamily: 'Playwrite VN, serif' }}>LOGIN</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                
            </ul>
            <div className='flex items-center gap-6'>
                <img src={assets.searchicon} className='w-7 cursor-pointer' alt="" />

                <div className='group relative'>
                    <img src={assets.profileicon} className='w-7 cursor-pointer' alt="" />
                    <div className='group-hover:block hidden absolute right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.carticon} className='w-7 min-w-7' alt="" />
                    <p className='absolute right-[3px] bottom-[20px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menuicon} className='w-5 cursor-pointer sm:hidden' alt="" />

            </div>
            {/* sidebar menu for small screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-2xl text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.sidemenuicon} className='h-4 rotate-180' alt="" />
                        <p className='text-lg'>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-sm' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-sm' to='/collection'>COLLECTIONS</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-sm' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-sm' to='/contactus'>CONTACTUS</NavLink>
                </div>
            </div>


        </div>
    )
}

export default Navbar
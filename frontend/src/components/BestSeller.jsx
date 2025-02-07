import React, { useContext, useEffect, useState } from 'react'
import Tittle from './Tittle';
import ProdouctItem from './ProdouctItem';
import { ShopContext } from '../context/ShopContext';


const BestSeller = () => {
    const {prodoucts} = useContext(ShopContext)
    const [bestSeller,setBestSeller]=useState([]);
    useEffect(()=>{
        const bestProdouct=prodoucts.filter((item)=>(item.bestseller));
        setBestSeller(bestProdouct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Tittle text1={'Best'} text2={'Sellers'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptate eum, reiciendis tempora totam assumenda dignissimos quia quae mollitia voluptates nulla, explicabo minus maxime. Et pariatur itaque perferendis non suscipit.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {
            bestSeller.map((item,index)=>(
                <ProdouctItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
        }
        </div>
    </div>
  )
}

export default BestSeller
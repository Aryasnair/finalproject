import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle';
import ProdouctItem from './ProdouctItem';

const LatestCollection = () => {
    const { prodoucts } = useContext(ShopContext);
    const [latestProdoucts,setLatestProdoucts]=useState([]);
    useEffect(()=>{
        setLatestProdoucts(prodoucts.slice(0,10));
    },[])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Tittle text1={'Latest'} text2={'Collections'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            "Discover our latest handmade crafts, each piece a unique work of art. Crafted with passion and care, these creations are designed to bring warmth and personality to any space."
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProdoucts.map((item,index)=>(
            <ProdouctItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
        </div>
    </div>
  )
}

export default LatestCollection
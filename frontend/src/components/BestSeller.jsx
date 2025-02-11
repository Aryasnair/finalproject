import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Tittle from './Tittle';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        console.log("Products in BestSeller:", products); // ✅ Debugging

        if (products.length > 0) { // ✅ Ensure products exist before filtering
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Tittle text1={'Best'} text2={'Sellers'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Discover our top-rated products, loved by customers!
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.length > 0 ? (
                    bestSeller.map((item) => (
                        <ProductItem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                ) : (
                    <p className="text-center col-span-5 text-gray-500">No best sellers available.</p>
                )}
            </div>
        </div>
    );
};

export default BestSeller;

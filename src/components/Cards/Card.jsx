import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {
    const [datas, setDatas]= useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        const loadData = async()=>{
            const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            const data = await res.json()
            setDatas(data)
        }
        loadData()
    },[])
    const handaleCard = (products)=>{
        const newCart = [...cart,products]
        setCart(newCart)
    }
    return (
        <div className='flex mt-20 w-11/12 mx-auto '>
            <div className='w-[80%] lg:grid grid-cols-3 gap-4'>
                {
                    datas.map(data =><SingleCard 
                        key={data.id}
                        SingleProduct = {data}
                        handaleCard = {handaleCard}
                        >
                        </SingleCard>)
                }
            </div>
            <div className='lg:w-[20%] ml-8 bg-error mt-4 px-6 '>
                <h1 className='text-2xl  font-bold text-center text-base-100 '>Order Summary</h1>
                <p className='mt-4 text-base-100 '>selected item : {cart.length}</p>
            </div>
        </div>
    );
};

export default Card;
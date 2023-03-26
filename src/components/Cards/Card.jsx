import React, { useEffect, useState } from 'react';

const Card = () => {
    const [datas, setDatas]= useState([])
    useEffect(()=>{
        const loadData = async()=>{
            const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            const data = await res.json()
            console.log(data)
        }
        loadData()
    },[])
    return (
        <div className='flex mt-10 w-11/12 mx-auto'>
            <div className='w-[80%]'>
                <h1>this is card</h1>
            </div>
            <div className='w-[20%]'>
                <h1>this is for value</h1>
            </div>
        </div>
    );
};

export default Card;
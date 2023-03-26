import React from 'react';
import man from '../../assets/74e9675e4677f231454a54264ac9014e-removebg-preview.png'

const Header = () => {
    return (
        <div className='flex items-center justify-center bg-base-100 '>
           <div>
            <p className='text-accent mb-8'>Sale up to 70% off</p>
            <h1 className='text-info text-4xl font-bold'>New Collection For Fall</h1>
            <p className='text-secondary'>Discover all the new arrivals of ready-to-wear collection.</p>
            <button className="btn  btn-accent mt-10">SHOP NOW</button>
            </div> 
            <div>
                <img src={man} alt="" className='' />
            </div>
        </div>
    );
};

export default Header;
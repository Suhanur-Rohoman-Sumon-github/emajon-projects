import React from 'react';

const SingleCard = (props) => {
    const { id, category, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = props.SingleProduct;
    const handaleCards = props.handaleCard
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                <figure><img src={img} alt="Shoes" className='w-full h-64 m-4' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>$ {price}</p>
                    <p className='mt-7'>Manufacturer : {seller}</p>
                    <p>Rating : {ratings}</p>
                    <div className="card-actions mt-5 ">

                        <div className='mx-auto mt-7 '>
                            <button onClick={()=>handaleCards(props.SingleProduct)} className="btn btn-wide btn-success text-neutral ">Add to Cart <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCard;
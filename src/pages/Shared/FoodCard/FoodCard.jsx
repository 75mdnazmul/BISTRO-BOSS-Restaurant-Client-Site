import React, { useEffect } from 'react';

const FoodCard = ({ item }) => {
    // For screen stay in page top
    useEffect(() => {
        const cardTopPosition = document.querySelector('.card').getBoundingClientRect().top;
        const offset = 200; // Adjust this offset to your preference
        window.scrollTo(0, cardTopPosition - offset);
    }, []);    
    
    const { name, image, recipe, price } = item
    return (
        <div className="card w-[350px] shadow-xl text-center bg-white ">
            <figure><img className="w-[350px] h-[250px] hover:scale-125 transition duration-500" src={image} alt="Shoes" /></figure>
            <p className='absolute right-0 m-4 px-5 py-1 bg-[#fda706] text-white text-lg font-bold rounded-xl'>${price}</p>
            <div className="p-4 text-center">
                <h2 className="font-bold text-2xl text-slate-900">{name}</h2>
                <p className="my-3 pb-16 text-slate-800 text-lg">{recipe}</p>
                <div className="text-center absolute bottom-0 left-0 right-0 mb-7">
                    <button className="btn bg-slate-300 text-yellow-600 text-xl border-b-8 border-0 hover:bg-slate-800 hover:text-[#fda706] hover:border-0 border-yellow-600 uppercase">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
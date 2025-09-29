import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div className='border bg-amber-700 rounded-2xl p-4'>
            {/* Card header */}
            <div >
                <h1 className='text-5xl text-cyan-400 font-bold'>{pricing.plan} </h1>

                <h4 className='text-3xl'>{pricing.price}</h4>
            </div>

            {/* card body */}
            <div className='bg-amber-500 text-gray-700 rounded-2xl p-4 mt-10'>
                <p>{pricing.description}</p>

                {
            pricing.features.map((feature, index) => <PricingFeature key={index} feature= {feature }></PricingFeature>)
                }
            </div>
            <button className="btn mt-7 w-full">Subscribe</button>
        </div>
    );
};

export default PricingCard;
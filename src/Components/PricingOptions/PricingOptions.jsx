import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData= use(pricingPromise)
   


    return (
        <div>
            <h2 className='text-7xl mt-20 mx-10'>
                <span className='text-cyan-700'>Get</span>
                 <span className='text-cyan-600'> Our</span> <br />
                 <span className='text-cyan-500'> Member</span> 
                 <span className='text-cyan-400'>$hip</span>
                 </h2>

                 <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-10 mt-20'>
                    {
                        pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}>
                            
                        </PricingCard>
                        )
                    }
                 </div>
        </div>
    );
};

export default PricingOptions;
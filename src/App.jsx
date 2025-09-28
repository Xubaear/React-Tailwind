import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'


const pricingPromise = fetch('pricingData.json').then(res => res.json())


function App() {
  

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>
        <PricingOptions pricingPromise={pricingPromise}>

        </PricingOptions>
      </Suspense>
    </>
  )
}

export default App

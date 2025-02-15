import React from 'react'
import Banner from './components/Banner'
import About2 from './components/About2'
import ProductCards from './components/ProductCards'
import Timmer from './components/Timmer'
import Choice from './components/Choice'
import Specifications from './components/Specifications'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'




const page = () => {
  return (
    <>
    <div className='bg-gradient-to-t from-[#d9c7b8] to-[#eae5de]'>
    <Banner/>
    <About2/>
    <ProductCards/>
    <Timmer/>
    <Choice/>
    <Specifications/>
    <Testimonials/>
    <Footer/>


    </div>
    
    </>
  )
}

export default page
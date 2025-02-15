import React from 'react'
import Banner from './components/Banner'
import K2 from './components/K2'
import ProductCards from './components/ProductCards'
import K4 from './components/K4'
import Choice from './components/Choice'
import Specifications from './components/Specifications'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'




const page = () => {
  return (
    <>
    <div className='bg-gradient-to-t from-[#d9c7b8] to-[#eae5de]'>
    <Banner/>
    <K2/>
    <ProductCards/>
    <K4/>
    <Choice/>
    <Specifications/>
    <Testimonials/>
    <Footer/>


    </div>
    
    </>
  )
}

export default page
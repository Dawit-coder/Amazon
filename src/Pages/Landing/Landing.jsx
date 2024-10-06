import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import CarouselEffect from '../../Components/Carousel/Carousel'
import Catagory from '../../Components/Catagory/Category'
import Product from '../../Components/Product/Product'

function Landing() {
  return (
    <LayOut>
        <CarouselEffect />
      <Catagory /> 
      <Product />
    </LayOut>
  )
}

export default Landing

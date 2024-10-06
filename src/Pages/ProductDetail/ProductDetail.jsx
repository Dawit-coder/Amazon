import React, { useEffect, useState } from 'react'
// import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'

function ProductDetail() {
  const [product, setproduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { productId } = useParams()
  
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(true)
    })
  }, [])

  if (!product) {
    return <Loader />;
  }


  return (
    <LayOut>

      {/* {
        isLoading?(<Loader/>):(<ProductCard product={product}/>)
      } */}

      <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true} />


    </LayOut>
  )
}


export default ProductDetail

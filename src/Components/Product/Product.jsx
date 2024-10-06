import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from './product.module.css'
import Loader from "../Loader/Loader";

function Product() {
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://fakestoreapi.com/products')
    .then((res) => {
      setproducts(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })

  }, []);

  return( 

    isLoading ? <Loader /> :(
      <section className={classes.products_container}>

        {
        products?.map((singleProduct) => (
          <ProductCard product={singleProduct} renderAdd={true} key={singleProduct.id} />
        ))
        }
      </section>
    )


    
  );
};

export default Product;

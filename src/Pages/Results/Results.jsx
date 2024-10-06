import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/endPoint';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import classes from './Results.module.css'

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
      console.log(res)
      setResults(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])


  return (
    <LayOut>
      <section>
        <h1 style={{padding: "30px"}}>Results</h1>
        <h1 style={{padding: "20px"}}>Category/ {categoryName}</h1>
        <hr />
        <div className={classes.products_container}>

          {results?.map((product)=>(
              <ProductCard 
              key={product.id}
              renderDesc={false}
              renderAdd={true}
              product={product}
              />
            ))
          }

        </div>
      </section>
    </LayOut>
  )
}

export default Results

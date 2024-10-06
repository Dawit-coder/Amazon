import React from 'react'
import classes from './category.module.css'
import {Link} from 'react-router-dom'

function CatagoryCard({data}) {
  return (
    <div>
        <Link to={`/category/${data.names}`}>
            <div className={classes.category_card}>
                <h2>{data.title}</h2>
                <div className={classes.products_grid}>
                    {
                        data.products.map((product, index) =>(
                            <div key={index} className={classes.product_card}>
                                <img src={product.image} alt="" />
                                <p>{product.name}</p>
                            </div>
                        ))
                    }
                </div>

                <p>see all deals</p>
                
            </div>
        </Link>

    </div>
  )
}

export default CatagoryCard

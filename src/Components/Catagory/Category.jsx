import React from 'react'
import {catagoryInfo} from './categoryInfos'
import CatagoryCard from './CategoryCard'
import classes from './category.module.css'

function Catagory() {
  return (
    <section className={classes.category_container}>
      {
        catagoryInfo.map((Info) => (
          <CatagoryCard data={Info} key={Info.title}/>
        ))
      }
    </section>
  )
}

export default Catagory

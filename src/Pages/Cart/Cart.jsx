import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormate from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
import { Type } from '../../Utility/action.type'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function Cart() {

  const [{basket}, dispatch] = useContext(DataContext)
  console.log(basket)
  const total = basket.reduce((amount, item)=>{
    return item.price * item.amount + amount
  }, 0)

  const increment=(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
  const decrement=(id)=>{
    dispatch({
      type:REMOVE_FROM_BASKET,
      id
    })
  }


  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {
            basket?.length==0?( <p>opps! No item in your cart.</p> ):(
              basket?.map((item, index)=>{
                return <section key={index} className={classes.cart_product}>
          <ProductCard product={item} renderDesc={true} flex={true} renderAdd={false} />
            <div className={classes.btn_container}>
              <button className={classes.btn} onClick={()=>increment(item)}><IoIosArrowUp size={20} /></button>
              <span>{item.amount}</span>
              <button className={classes.btn} onClick={()=>decrement(item.id)}><IoIosArrowDown size={20} /></button>
            </div>

          </section>
              })
            )
          }    
      
        </div>
    {basket?.length !== 0 &&(
        <div className={classes.subtotal}>
          <div>
            <p>subtotal ({basket?.length}) item</p>
            <CurrencyFormate amount={total} />
          </div>
          <span>
            <input type="checkbox" />
            <small>This order containes a gift</small>
          </span>
          <Link to='/payments'> Continue To CheckOut </Link>
        </div>
      )}
  
        
      </section>
    </LayOut>
  )
}

export default Cart

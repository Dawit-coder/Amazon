import React, { useContext,useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from "./Payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from "../../Components/Product/ProductCard"
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormate from '../../Components/CurrencyFormat/CurrencyFormat'

function Payment() {

  const [{user, basket}] = useContext(DataContext)
  console.log(user.email)
  const totalItem = basket?.reduce((amount, item)=>{
    return item.amount + amount
  }, 0)

  const total = basket.reduce((amount, item)=>{
    return item.price * item.amount + amount
  }, 0)

  const stripe = useStripe();
  const elements = useElements();
  
  const [cardError, setcardError] = useState(null)
  const handleChange = (e) =>{
    e?.error?.message ? (setcardError(e?.error?.message)) : ("")
  }

  return (
    <LayOut>
      {/* Header */}
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>

      {/* Payment Method */}
      <section className={classes.payment}>
        {/* Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>.......</div>
            <div>Chicago</div>
          </div>

        </div>
        <hr />

        {/* Products */}
        <div className={classes.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {
              basket?.map((item)=><ProductCard product={item} flex={true} />)
            }
          </div>
        </div>
        <hr />

        {/* Card form */}

        <div className={classes.flex}>
          <h1>Payment Methods</h1>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {/* ERROR */}
                {cardError && <small style={{color:'red', paddingBottom: '10px'}} >{cardError}</small> }
                {/* Card Element */}
                <CardElement onChange={handleChange} />
                {/* Price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{display:'flex', gap:'10px'}}> 
                      <p> Total order </p>  |  <CurrencyFormate amount={total} /> 
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  )
}

export default Payment

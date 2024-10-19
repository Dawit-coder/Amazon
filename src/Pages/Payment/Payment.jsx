import React, { useContext,useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from "./Payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from "../../Components/Product/ProductCard"
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormate from '../../Components/CurrencyFormat/CurrencyFormat'
import { axiosInstance } from '../../Api/axios'
import {ClipLoader} from "react-spinners"
import { db } from '../../Utility/firebase' 
import { useNavigate } from 'react-router-dom'

function Payment() {

  const [{user, basket}] = useContext(DataContext)
  // console.log(user.email)
  const [processing, setProcessing] = useState(false)
  const totalItem = basket?.reduce((amount, item)=>{
    return item.amount + amount
  }, 0)

  const total = basket.reduce((amount, item)=>{
    return item.price * item.amount + amount
  }, 0)

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  
  const [cardError, setcardError] = useState(null)
  const handleChange = (e) =>{
    e?.error?.message ? (setcardError(e?.error?.message)) : ("")
  }

  const handlePayment = async (e) => {
    e.preventDefault();  

    // Contact the function inorder to get secret code

    try {
      setProcessing(true)
      const response = await axiosInstance({
        method: "POST",
        url: `payment/create?total=${total * 100}`,
      })
      console.log(response)

      const clientSecret = response.data?.clientSecret

     //React side confirmation

      const { paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method:{
            card: elements.getElement(CardElement),
          }
        }
      )
      console.log(paymentIntent)

    // Order the firestore to store and clear the basket
      await db.collection("users").doc(user.uid).collection("orders").doc(paymentIntent.id).set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        })

      navigate("/orders", {state:{msg:"you have placed in order"}})
      setProcessing(false)
    } catch (error) {
      console.log(error)
      setProcessing(false)
    }
    
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
              basket?.map((item, key)=><ProductCard product={item} flex={true} key={key} />)
            }
          </div>
        </div>
        <hr />

        {/* Card form */}

        <div className={classes.flex}>
          <h1>Payment Methods</h1>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
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
                  <button type="submit">
                    {
                      processing?(
                        <div className={classes.loading}>
                          <ClipLoader color='gray' size={12} />
                          <p>Please Wait ...</p>
                        </div>
                        

                      ):("Pay Now")
                    }
                  </button>
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

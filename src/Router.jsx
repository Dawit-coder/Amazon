import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Auth from './Pages/Auth/Auth'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from '../src/Components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe('pk_test_51Q8lnz2LV7etoMOTgPcb9CLTO7EdILFRxdgvQFopE5xZmPtXbVXThoKQvEjKKm7UTtcuXoC0zF58edd5CZjdR0JZ00qFUebqo5'

);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/payments' 
        element={
          <ProtectedRoute msg={"You must logIn to pay"} redirect={'/payments'}>

            <Elements stripe={stripePromise} >
              <Payment />
            </Elements>
          
          </ProtectedRoute>
          }
          />
        <Route path='/orders' element={
           <ProtectedRoute msg={"You must logIn to access your orders"} redirect={'/orders'}>
            <Orders />
          </ProtectedRoute>
        
        }
          
          />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/category/:categoryName' element={<Results />} />
      </Routes>
    </Router>
  )
}

export default Routing

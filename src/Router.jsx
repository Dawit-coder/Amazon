import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payments from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import SignUp from './Pages/Auth/SignUp'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/auth' element={<SignUp />}/>
        <Route path='/payments' element={<Payments />}/>
        <Route path='/orders' element={<Orders />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/category/:categoryName' element={<Results />} />
      </Routes>
    </Router>
  )
}

export default Routing

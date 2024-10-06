import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';


function Header() {

  const [{basket}, dispatch] = useContext(DataContext)
  const totalItem = basket?.reduce((amount, item)=>{
    return item.amount + amount
  }, 0)


  return (
    <section className={classes.fixed}>
        <section>
            <div className= {classes.header_container}>
              {/* logo */}
              <div className= {classes.logo_container}>
                <Link to="/">
                  <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </Link>
                {/* delivery */}
                <div className= {classes.delivery}>
                  <span>
                    <SlLocationPin />
                  </span>
                  <div>
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                  </div>
                </div>
              </div>
              
              <div className={classes.search}>
                {/* search */}
                <select name="" id="">
                  <option value="">All</option>
                </select>
                <input type="text" name='' id='' placeholder='Search Amazon' />
                <BsSearch size={25}/>
              </div>

              {/* right side */}
              <div className={classes.order_container}>
                  <a href="" className={classes.language}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png" alt="" />
                    <select name="" id="">
                      <option value="">EN</option>
                    </select>
                  </a>
                  <Link to="/auth">
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </Link>
                  {/* orders */}
                  <Link to="/orders">
                    <p>Returns</p>
                    <span>& orders</span>
                  </Link>
                  {/* cart */}
                  <Link to="/cart" className={classes.cart}>
                    <BiCart size={35}/>
                    {/* icon */}
                    <span>{totalItem}</span>
                  </Link>
              </div>
          </div>

        </section>
        <LowerHeader />
    </section>

  )
}

export default Header
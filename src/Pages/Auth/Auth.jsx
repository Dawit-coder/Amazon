import React from 'react'
import classes from "./Auth.module.css"
import { Link } from 'react-router-dom'

function Auth() {
  return (
    <section className={classes.login}>
      <Link>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cypCl6CPaxXoyCDOaHTkjdkNNkd6YU625g&s" alt="" />
      </Link>
      <div className={classes.form_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' />
          </div>
          <button className={classes.login_signin}>Sign In</button>
        </form>
        {/* Agreement */}
        <p>By sigining-in you agree to AMAZON FAKE CLONE conditions of use & sale. Please see our privacy Notice, our cookies Notice and our Interest-Based Ads Notice.</p>

        {/* Create Account Button */}
        <button className={classes.login_registerbtn}>Create Your Amazon Account</button>

      </div>
    </section>
  )
}

export default Auth

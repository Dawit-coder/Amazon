import React, { useContext, useState } from 'react'
import classes from "./Auth.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Utility/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { DataContext } from "../../Components/DataProvider/DataProvider"
import { Type } from '../../Utility/action.type'
import { ClipLoader } from 'react-spinners'

function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn:false,
    signUP:false
  })

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate()

  console.log(user)

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name)
    if(e.target.name == "signin") {
      setLoading({...loading, signIn:true})

      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo)=>{
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          })
          setLoading({...loading, signIn:false})
          navigate("/")
        })

        .catch((error)=>{
          console.log(error)
          setLoading({...loading, signIn:false})
          setError(error.message)
        })
    } else {
      setLoading({...loading, signUP:true})
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          })
          setLoading({...loading, signUP:false})
          navigate("/")

        })
        .catch((error)=>{
          setLoading({...loading, signUP:false})
          console.log(error)
          setError(error.message)
        })
    }
  }

  return (
    <section className={classes.login}>
      <Link to={"/"}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cypCl6CPaxXoyCDOaHTkjdkNNkd6YU625g&s" alt="" />
      </Link>
      <div className={classes.form_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id='password' />
          </div>
          <button type='submit' onClick={authHandler} name='signin' className={classes.login_signin}>
            {
              loading.signIn ? (<ClipLoader color= '#fff' size={15}/>) : ("Sign In")
            }
          </button>
        </form>
        {/* Agreement */}
        <p>By sigining-in you agree to AMAZON FAKE CLONE conditions of use & sale. Please see our privacy Notice, our cookies Notice and our Interest-Based Ads Notice.</p>

        {/* Create Account Button */}
        <button type='submit' onClick={authHandler} name='signup' className={classes.login_registerbtn}>
          {
            loading.signUP ? (<ClipLoader color= '#fff' size={15}/>) : ("Create Your Amazon Account")
          } 
        </button>

        {
          error && <small style={{paddingTop:"5px", color:"red"}}>{error}</small>
        }

      </div>
    </section>
  )
}

export default Auth

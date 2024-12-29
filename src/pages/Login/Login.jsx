import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'


const Login = () => {

  const [signState, setSignState] = useState("Sign In")


  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="not found" />

      <div className="login-form">
        <h1>{signState}</h1>

        <form>
          {signState === "Sign Up"? <input type="text" placeholder='Your Name' /> : <></>}
          
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />

          <button>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input id='rememberMe' type="checkbox" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <p>Need Help?</p>
          </div>
        </form>

        <div className="form--switch">
          {signState === "Sign Up"? <p>Already have account? <span onClick={()=> {setSignState('Sign In')} }>Sign In Now</span> </p> : <p>New To Netflix? <span onClick={()=> {setSignState('Sign Up')} }>Sign Up Now</span> </p> }
        </div>
      </div>
    </div>
  )
}

export default Login
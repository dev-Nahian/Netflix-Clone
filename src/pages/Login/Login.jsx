import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {


  // States
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // User Auth
  const user_auth = async () => {
    setLoading(true)
    try {
      if (signState === "Sign In") {
        await login(email, password); 
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.error("Authentication failed:", error.message);
    }
    setLoading(false)
  };


// Handler
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!email || !password || (signState !== "Sign In" && !name)) {
    console.error("Missing required fields");
    return;
  }

  await user_auth();
};


  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>
    :
    <>
      <div className='login'>
        <img src={logo} className='login-logo' alt="not found" />

        <div className="login-form">
          <h1>{signState}</h1>

          <form>
            {signState === "Sign Up"? <input value={name} type="text" placeholder='Your Name' onChange={(e)=>{setName(e.target.value)}} /> : <></>}
            
            <input value={email} type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />

            <input value={password} type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />

            <button onClick={handleSubmit}>{signState}</button>

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
    </>
  )
}

export default Login
import React, { useState } from 'react'
import "./auth.css"
import { FiEye } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router'
import { FaRegEyeSlash } from 'react-icons/fa'



const Login = () => {
  const nav = useNavigate()
    const[showpassword, setShowpassword]=useState(false)
  
   const [auth, setAuth]= useState({
      email:"",
      password:"",
    })
  return (
    <div className="Overall">
  <div className="box">
    <div className="boxWrapper">
      <div className="logo">
        <img src="src/assets/Public/CAMPUSTRADE-02 1.png"/>
      </div>

      <div className="inputHolder">
        <h2 className="welcome">Welcome! We Are Glad To Have You Here</h2>
        <p className="signupText">Login</p>
        <span className="infoText">Fill In Your Correct Information</span>

        <div className="inputBox">
          <label>Email</label>
          <input type="email" placeholder="Input Your Email" 
          value={auth.email} onChange={(e)=>setAuth({...auth, email:e.target.value})} />

          <label>Password</label>
          <div className="passwordField">
            <input type={showpassword ? 'text': 'password'} placeholder="Enter Your Password"
             value={auth.password} onChange={(e)=>setAuth({...auth, password:e.target.value})} />
            <span className="eyeIcon" onClick={() => setShowpassword((prev)=>!prev)}>
                           {showpassword ? (
                         <FiEye />
                        ) :  <FaRegEyeSlash /> }
                        </span>
          </div>

          <button className="submitBtn" onClick={()=>nav("/dashboard")}>Login</button>
          <div className="footer">
            <p>Already Have An Account? <span style={{color:"purple"}} onClick={()=> nav("/signup")}>Sign Up</span></p>
            <p style={{color:"purple", display:"flex"}} onClick={()=>nav("/forgetpassword")}>Forgot Password?</p>
           
          </div>
          <button className="googleLogin">
          <FcGoogle className='icon'/>
          <span>Sign in with Google</span>
            </button>

         
          <p  className='trademark'>@campustrade</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login
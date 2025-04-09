import React, { useState } from 'react'
import "./auth.css"
import { FiEye } from 'react-icons/fi'
import { useNavigate } from 'react-router'
import { FaRegEyeSlash } from 'react-icons/fa'

const SignUp = () => {
  const nav = useNavigate()
  const[showpassword, setShowpassword]=useState(false)
  const [auth, setAuth]= useState({
    email:"",
    password:"",
    confirmpassword:""
  })
  return (
    <div className="Overall withBackgroundImage">
  <div className="box">
    <div className="boxWrapper">
      <div className="logo">
        <img src="src/assets/Public/CAMPUSTRADE-02 1.png"/>
      </div>

      <div className="inputHolder">
        <h2 className="welcome">Welcome! We Are Glad To Have You Here</h2>
        <p className="signupText">Sign Up</p>
        <span className="infoText">Fill In Your Correct Information</span>

        <div className="inputBox">
          <label>Email</label>
          <input type="email" placeholder="Input Your Email"
           value={auth.email} onChange={(e)=>setAuth({...auth, email:e.target.value})} />

          <label>Password</label>
          <div className="passwordField">
            <input type={showpassword ? 'text': 'password'} placeholder="Enter Your Password" 
            value={auth.password} onChange={(e)=>setAuth({...auth, password:e.target.value})}/>
            <span className="eyeIcon" onClick={() => setShowpassword((prev)=>!prev)}>
               {showpassword ? (
             <FiEye />
            ) :  <FaRegEyeSlash /> }
            </span>
             
          </div>

          <label>Confirm Password</label>
          <div className="passwordField">
            <input type={showpassword ? 'text': 'password'} placeholder="Enter Your Password"
             value={auth.confirmpassword} onChange={(e)=>setAuth({...auth, confirmpassword:e.target.value})} />
            <span className="eyeIcon" onClick={() => setShowpassword((prev)=>!prev)}>
               {showpassword ? (
             <FiEye />
            ) :  <FaRegEyeSlash /> }
            </span>
          </div>

          <button className="submitBtn">Sign Up</button>
          <div className="footer">
            <p style={{display:"flex", justifyContent:'flex-start'}}>Already Have An Account?
               <span style={{color:"purple"}} onClick={()=> nav("/login")}>Login</span></p>
          </div>     
          <p className='trademark'>@campustrade</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SignUp
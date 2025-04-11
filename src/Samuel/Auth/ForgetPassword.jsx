import React, { useState } from 'react'
import "./auth.css"
import { useNavigate } from 'react-router'

const ForgetPassword = () => {
   const [auth, setAuth]= useState({
      email:"",
    })
    const nav = useNavigate()
  return (
    <div className="Overall">
  <div className="box">
    <div className="boxWrapper">
      <div className="logo">
        <img src="/assets/CAMPUSTRADE-02 1.png"/>
      </div>

      <div className="inputHolder">
        <p className="signupText">Recover your Password</p>
        <span className="infoText">You can Request A Password Reset Below. We Will Send A <br></br>Security Code To The Email Addtress,Please Make sure it is <br></br>Correct</span>

        <div className="inputBox">
          <label>Email</label>
          <input type="email" placeholder="Input Your Email" value={auth.email} 
          onChange={(e)=>setAuth({...auth, email:e.target.value})} />

          <button className="submitBtn">Request password reset</button>
          <p style={{display:"flex", justifyContent:'flex-start'}}>Already Have An Account?
               <span style={{color:"purple"}} onClick={()=> nav("/login")}>Login</span></p>
          <p className='trademark'>@campustrade</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ForgetPassword
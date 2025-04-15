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
       <img src="/images/CAMPUSTRADE-02 1.png" alt="" />
      </div>

      <div className="inputHolder">
        <p className="signupText">Recover your Password</p>
        <span className="infoText">You can Request A Password Reset Below. We Will Send A <br></br>Security Code To The Email Addtress,Please Make sure it is <br></br>Correct</span>

        <div className="inputBox">
          <label>Email</label>
          <input  type="email" placeholder="Input Your Email" value={auth.email} 
          onChange={(e)=>setAuth({...auth, email:e.target.value})} />

          <button className="submitBtn">Request password reset</button>
          <div className='footer'>
          <p style={{display:"flex", justifyContent:'flex-start' , cursor: "default"}}>Already Have An Account?
               <span style={{color:"purple", cursor:"pointer"}} onClick={()=> nav("/login")}>Login</span></p>
               </div>
          <p className='trademark'>@campustrade</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ForgetPassword
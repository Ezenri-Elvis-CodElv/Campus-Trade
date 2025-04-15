import React, { useState } from 'react'
import "./auth.css"
import { FiEye } from 'react-icons/fi'
import { FaRegEyeSlash } from 'react-icons/fa'


const ResetPassword = () => {
   const[showpassword, setShowpassword]=useState(false)
   const [auth, setAuth]= useState({
      email:"",
      password:"",
      confirmpassword:""
    })
  return (
    <div className="Overall">
  <div className="box">
    <div className="boxWrapper">
      <div className="logo">
        <img src="/images/CAMPUSTRADE-02 1.png" alt="" />
      </div>

      <div className="inputHolder">
        <p className="signupText">Reset your password</p>
        <span className="infoText">Insert your new password</span>

        <div className="inputBox">
          <label>Email</label>
          <input type="email" placeholder="Input Your Email"
          value={auth.email} 
          onChange={(e) => setAuth({...auth, email:e.target.value})}  />

          <label>Password</label>
          <div className="passwordField">
            <input type={showpassword ? 'text': 'password'} placeholder="Enter Your Password"
            value={auth.password}
            onChange={(e) => setAuth({...auth, password:e.target.value})} />
           <span className="eyeIcon" onClick={() => setShowpassword((prev)=>!prev)}>
                          {showpassword ? (
                        <FaRegEyeSlash /> 
                       ) :  <FiEye />}
                       </span>
          </div>

          <label>Confirm Password</label>
          <div className="passwordField">
            <input type={showpassword ? 'text': 'password'} placeholder="Enter Your Password" 
             value={auth.confirmpassword} onChange={(e)=>setAuth({...auth, confirmpassword:e.target.value})}/>
          <span className="eyeIcon" onClick={() => setShowpassword((prev)=>!prev)}>
                         {showpassword ? (
                    <FaRegEyeSlash /> 
                      ) :     <FiEye />}
                      </span>
          </div>

          <button className="submitBtn">Change Password</button>

          <p className='trademark'>@campustrade</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ResetPassword
import React, { useState } from 'react'
import "./auth.css"
import { FiEye } from 'react-icons/fi'
import { FaRegEyeSlash } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'


const ResetPassword = () => {
  const nav = useNavigate()
  const {token} = useParams()
   const[showpassword, setShowpassword]=useState(false)
   const [auth, setAuth]= useState({
      password:"",
      confirmpassword:""
    })
      const [loading, setLoading] = useState(false);

    
    const url = `https://campustrade-kku1.onrender.com/api/v1/seller/reset/:${token}`;
  const handlesubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(url, {
        password: auth.password,
        confirmPassword: auth.confirmpassword
      },{ headers:{
        Authorization: `Bearer ${token}`,
      },});console.log(res)
      if (res.status === 201) {
        nav("/login");
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err)
      toast.error();
    }
  };
  const isDisabled =  !auth.password || !auth.confirmpassword;
  return (
    <div className="Overall">
  <div className="box">
    <div className="boxWrapper">
      <div className="authlogo">
        <img src="/images/CAMPUSTRADE-02 1.png" alt="" />
      </div>

      <div className="inputHolder">
        <p className="signupText">Reset your password</p>
        <span className="infoText">Insert your new password</span>

        <div className="inputBox">

          <label>New Password</label>
          <div className="passwordField">
            <input type={showpassword ? 'text': 'password'} placeholder="Enter Your New Password"
            value={auth.password}
            onChange={(e) => setAuth({...auth, password:e.target.value})} />
           <span className="eyeIcon" onClick={() => setShowpassword((prev)=>!prev)}>
                          {showpassword ? (
                        <FaRegEyeSlash /> 
                       ) :  <FiEye />}
                       </span>
          </div>

          <label>Confirm New Password</label>
          <div className="passwordField">
            <input type={showpassword ? 'text': 'password'} placeholder="Enter Your New Password" 
             value={auth.confirmpassword} onChange={(e)=>setAuth({...auth, confirmpassword:e.target.value})}/>
          <span className="eyeIcon" onClick={() => setShowpassword((prev)=>!prev)}>
                         {showpassword ? (
                    <FaRegEyeSlash /> 
                      ) :     <FiEye />}
                      </span>
          </div>

          <button className="submitBtn"onClick={handlesubmit}
           disabled={isDisabled ||  loading}
           style={{
             opacity: isDisabled || loading ? 0.6 : 1,
             cursor: isDisabled || loading ? "not-allowed" : "pointer",
           }}>
          {loading ? <div>Loading....</div> : <div>Change Password</div>}
          </button>

          <p className='trademark'>@campustrade</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ResetPassword
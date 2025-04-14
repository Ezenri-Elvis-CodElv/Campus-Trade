import React from 'react'
import "./verifysuccessful.css"
import UserImg from "../../public/images/Lp2.jpg"
import  { toast, ToastContainer } from 'react-toastify'
-ToastContainer

const VerifySuccessful = () => {
  return (
    <div className='card-body'>
        <ToastContainer/>
        <div className='verify-card'>
<div className='verify-img'>
    <span className='verify-img-holder'>
        <img src={UserImg} alt="" />
    </span>
</div>
<div className='verify-text'>
    <h2 className='verify-n'>Amara onah</h2>
    <p className='verify-u'>Lagos state University</p>
    <h3 className='verify-w'>WhatsApp link</h3>
</div>
<div className='verify-id'>
    <img src="../assets/download.jpg" alt="" />
</div>
<span className='verify-email'>
    amaraonah@gmail.com
</span>
        </div>
<button className='verify-button' onClick={()=> {toast.success("user verification successfull")}}>verify user</button>      
    </div>
  )
}

export default VerifySuccessful

import React from 'react'
import "./ChangePassword.css"
import { MdOutlineBackspace } from "react-icons/md";
const ChangePassword = () => {
  return (
      <div className='changepassword'>
        <div className='changepasswordwrapper'>
         <div className='backicon'>
         <button className='backiconbtn'> 
         <MdOutlineBackspace size={40} style={{color:"black"}}/>
         </button>
         </div>
          <div className='changepasswordinner'>
            <div className='changepasswordinnerlast'>
              <h4 className='nomber'>
                Reset Password
              </h4>
              <h3 className='nomber1'>
                click on the book and input your new password <br /> number
              </h3>
              <input className='jjjj' type="password" 
              placeholder='@867demcf00' />  
              <button className='saveee'>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ChangePassword
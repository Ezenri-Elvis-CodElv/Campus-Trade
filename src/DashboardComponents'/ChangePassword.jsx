import React from 'react'
import "./ChangePassword.css"
import { MdOutlineInput } from "react-icons/md";

const ChangePassword = () => {
  return (
      <div className='changepassword'>
        <div className='changepasswordwrapper'>
          <div className='changepasswordinner'>
            <div className='changepasswordinnerlast'>
              <h4 className='nomber'>
                Reset Password
              </h4>
              <h3 className='nomber1'>
                click on the book and input your new password <br /> number
              </h3>
              <input type="password" 
              placeholder='@867demcf00'   />  
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

import React from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { useNavigate } from 'react-router';
import "./changepassword.css"

const ChangePassword = () => {
  const navigate = useNavigate()
  return (
      <div className='changepassword'>
        <div className='changepasswordwrapper'>
         <div className='backicon'>
         <button className='backiconbtn'> 
         <RiCloseFill onClick={() => navigate(-1)}/>         
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
import React from 'react'
import "./Changephonenumber.css"
import { MdOutlineBackspace } from "react-icons/md";
 
const ChangePhoneNumber = () => {
  return(
    <div className='changepassword'>
  <div className='changepasswordwrapper'>
   <div className='backicon'>
            <button className='backiconbtn'> 
            <MdOutlineBackspace size={40} style={{color:"black"}}/>
            </button>
            </div>
    <div className='changepasswordonner'>
      <div className='changepasswordonnerlast'>
        <h4 className='number1'>
          Change Your Number
        </h4>
        <h3 className='number'>
          click on the book and input your new phone <br /> number
        </h3>
        <input className='kkkkk' type="number" 
        placeholder='090876543'   />  
        <button className='saveee'>
          Save
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default ChangePhoneNumber
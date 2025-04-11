import React from 'react'
import "./Changephonenumber.css"

const ChangePhoneNumber = () => {
  return(
    <div className='changepassword'>
  <div className='changepasswordwrapper'>
    <div className='changepasswordinner'>
      <div className='changepasswordinnerlast'>
        <h4 className='number1'>
          Change Your Number
        </h4>
        <h3 className='number'>
          click on the book and input your new phone <br /> number
        </h3>
        <input type="number" 
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

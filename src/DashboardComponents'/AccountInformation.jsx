import { useEffect, useState } from 'react';
import { IoKeyOutline } from 'react-icons/io5';
import { PiNotePencilDuotone } from 'react-icons/pi';
import "./accountinformation.css"

const AccountInformation = () => {
  const [acctInfo, setAcctinfo] =useState(() => {
    const savedData = localStorage.getItem("accountInfo");
    return savedData
    ? JSON.parse(savedData)
    :{
    fullname:"",
    fulladdress: "",
    phonenumber: "",
    bio:"",
    profileImage: ""
  
  };
 
  
  });
  useEffect(() => {
    localStorage.setItem("accountInfo", JSON.stringify(acctInfo))
  }
  )
   
  return (
    <div className="account-container">
      <div className="account-header">
        <p className="account-dash">Dashboard / settings</p>
        <h2 className="account-title">Account settings</h2>
      </div>

      <div className="personal-info-section">
        <h3 className="personal-info-title">Personal information</h3>

        <div className="profile-pic-section">
          <img
            src={acctInfo.profileImage}
            className="profile-image"
          />
          <input
          type='file'
          accept='image/*'
          style={{display:"none"}}
          id='profilePicInput'
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setAcctinfo({...acctInfo, profileImage:reader.result});
              };
              reader.readAsDataURL(file);
            }
          }}
          />
        <button
         className="change-pic-text"
         onClick={() => document.getElementById("profilePicInput").click()}>
            change <br /> profile <br /> pic
            </button>
           </div>

        <div className="input-group">
          <label className="input-label">Full name</label>
          <input type="text" className="input-field" placeholder="" 
          value={acctInfo.fullname} 
          onChange={(e)=>setAcctinfo({...acctInfo, fullname:e.target.value})}/>
        </div>

        <div className="input-group">
          <label className="input-label">Full Address</label>
          <input type="email" className="input-field" placeholder="" 
           value={acctInfo.fulladdress}
            onChange={(e)=>setAcctinfo({...acctInfo, fulladdress:e.target.value})}/>
        </div>

        <div className="input-group">
          <label className="input-label">Phone number</label>
          <input type="text" className="input-field" placeholder="" 
           value={acctInfo.phonenumber} 
           onChange={(e)=>setAcctinfo({...acctInfo, phonenumber:e.target.value})}/>
        </div>

        <div className="input-group">
          <label className="input-label">Bio</label>
          <textarea
            className="bio-field"
            placeholder=""
            value={acctInfo.bio} 
            onChange={(e)=>setAcctinfo({...acctInfo, bio:e.target.value})}
          ></textarea>
        </div>

        <div className="account-buttons">
          <button className="reset-password-button">
            <span className="reset-icon"><IoKeyOutline /></span>
            Reset password
          </button>
          <button className="change-phone-button">
            <span className="change-icon"><PiNotePencilDuotone /></span>
            Change phone <br /> number
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
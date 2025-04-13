
// import React from "react";
import "./Changephonenumber.css"
import { RiCloseFill } from "react-icons/ri";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";


const ChangePhoneNumber = () => {
  const navigate = useNavigate();
  return (
    <div className="changepassword">
      <div className="changepasswordwrapper">
        <div className="backicon">
          <button className="backiconbtn" onClick={() => navigate(-1)}>
            <RiCloseFill />
          </button>
        </div>
        <div className="changepasswordonner">
          <div className="changepasswordonnerlast">
            <h4 className="number1">Change Your Number</h4>
            <h3 className="number">
              click on the book and input your new phone <br /> number
            </h3>
            <input className="kkkkk" type="number" placeholder="090876543" />
            <button className="saveee">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};



 

  return(
      <div className='DeleteProfile'>
        <div className='usersname'>
        <h2 className='namesofusers'>NAME OF USERS</h2>
          <h2 className='actioncalls'>call to action</h2>
          </div>
            <div className='usersbody'>
              <div className='fistcentereddiv'>
                <div className='firstdivcenterd1'>
                  <div className='imgdiv'>
                    <img  className='' src="src/assets/Ellipse 22.png" alt="" />
                      </div>
                      <div className='h1divs'>
                    <h2 className='font1'>Edith Aba</h2>
                    <h2 className='font2'>Shoes</h2>
                    <h2 className='font2'>Lagos State University</h2>
                  </div>
                </div>
                <div className='firstdivcenterd10'>
                  <div className='imgdiv2'>
                    <img src="src/assets/Frame 614.png" alt="" />
                    <h2 className='imgh21'>Restrict users</h2>
                  </div>
                  <div className='imgdiv3'>
                  <img src="src/assets/Frame 614.png" alt="" />
                  <h2 className='imgh22'>delete users</h2>
                  </div>
                </div>
              </div>
                <div className='fistcentereddiv1'>
                <div className='firstdivcenterd1'>
                  <div className='imgdiv'>
                    <img  src="src/assets/Ellipse 22.png" alt="" />
                      </div>
                  <div className='h1divs'>
                    <h2 className='font1'>Adewale Samuel</h2>
                    <h2 className='font2'>Books</h2>
                    <h2 className='font2'>Lagos State University</h2>
                  </div>
                </div>
                <div className='firstdivcenterd10'>
                  <div className='imgdiv2'>
                    <img src="src/assets/Frame 614.png" alt="" />
                    <h2 className='imgh21'>Restrict users</h2>
                  </div>
                  <div className='imgdiv3'>
                  <img src="src/assets/Frame 614.png" alt="" />
                  <h2 className='imgh22'>delete users</h2>
                  </div>
                </div>
                </div>
                  <div className='fistcentereddiv2'>
                  <div className='firstdivcenterd1'>
                  <div className='imgdiv'>
                    <img  src="src/assets/Ellipse 22.png" alt="" />
                      </div>
                  <div className='h1divs'>
                    <h2 className='font1'>Eze Godwin</h2>
                    <h2 className='font2'>Mobile Device</h2>
                    <h2 className='font2'>Lagos State University</h2>
                  </div>
                </div>
                <div className='firstdivcenterd10'>
                  <div className='imgdiv2'>
                    <img src="src/assets/Frame 614.png" alt="" />
                    <h2 className='imgh21'>Restrict users</h2>
                  </div>
                  <div className='imgdiv3'>
                  <img src="src/assets/Frame 614.png" alt="" />
                  <h2 className='imgh22'>delete users</h2>
                  </div>
                </div>
                  </div>
                    <div className='fistcentereddiv3'>
                    <div className='firstdivcenterd1'>
                  <div className='imgdiv'>
                    <img  src="src/assets/Ellipse 22.png" alt="" />
                      </div>
                  <div className='h1divs'>
                    <h2 className='font1'>Joy Favour</h2>
                    <h2 className='font2'>Books</h2>
                    <h2 className='font2'>Lagos State University</h2>
                  </div>
                </div>
                <div className='firstdivcenterd10'>
                  <div className='imgdiv2'>
                    <img src="src/assets/Frame 614.png" alt="" />
                    <h2 className='imgh21'>Restrict users</h2>
                  </div>
                  <div className='imgdiv3'>
                  <img src="src/assets/Frame 614.png" alt="" />
                  <h2 className='imgh22'>delete users</h2>
                  </div>
                </div>
                    </div>
                      <div className='fistcentereddiv4'>
                      <div className='firstdivcenterd1'>
                  <div className='imgdiv'>
                    <img  src=""/>
                      </div>
                  <div className='h1divs'>
                    <h2 className='font1'>Adewale Aba</h2>
                    <h2 className='font2'>Mobile devices</h2>
                    <h2 className='font2'>Lagos State University</h2>
                  </div>
                </div>
                <div className='firstdivcenterd10'>
                  <div className='imgdiv2'>
                    <img src="src/assets/Frame 614.png" alt="" />
                    <h2 className='imgh21'>Restrict users</h2>
                  </div>
                  <div className='imgdiv3'>
                  <img src="src/assets/Frame 614.png" alt="" />
                  <h2 className='imgh22'>delete users</h2>
                  </div>
                </div>
                      </div>
          </div>
      </div>
  )
}



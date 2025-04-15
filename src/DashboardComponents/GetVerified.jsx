import React from 'react'
import "./GetVerified.css"
import { TbCapture } from "react-icons/tb";

const GetVerified = () => {
  return (
    <div className='GetVerified'>
      <div className='getverifiedbody'>
          <div className='getverifiedwrap'>
              <TbCapture size={85}/>
              <h2 className='getv'>User Verification</h2>
              <h1 className='gev1'>fill in the neccessary information below</h1>
          </div>
            <div className='getverifiedwrapper'>
               <div className='getverifiedwrapperbody'>
                  <div className='P1'>
                      <p className='veryfy'>Name</p>
                      <input className='input' type="text"
                       />
                  </div>
                    <div className='p2'>
                    <p className='veryfy1'>Phone number</p>
                      <input className='inputz' type="text"
                       />
                      </div>
               </div>
                  <div className='getverifiedwrapperbody1'>
                  <div className='P3'>
                      <p className='veryfy3'>Whatsapp Link</p>
                      <input className='inputw' type="text"
                       />
                  </div>
                    <div className='p4'>
                    <p className='veryfy4'>School/Location</p>
                      <input className='inpute' type="text"
                      />
                      </div>
               </div>
                <div className='getverifiedwrapperbody2'>
                  <div className='p10'>
                      <p className='very9'>Gender</p>
                      <div className='last'>
                        <div className='male'>
                        <input type="radio"   name='choice'
                        style={{accentColor:"purple"}} />
                        <label>Male</label>
                        </div>
                        <div className='male'>
                        <input type="radio"  name='choice'
                        style={{accentColor:"purple"}} />
                        <label>Female</label>
                        </div>
                      </div>
                  </div>
                  <div className='p11'>
                  <p className='veryfy9'>Jamb registration number</p>
                      <input className='inpuz' type="text"
                       />
                  </div>
                </div>
                  <button className='btn10'>
                    Done
                  </button>
            </div>
      </div>
    </div>
  )
}

export default GetVerified

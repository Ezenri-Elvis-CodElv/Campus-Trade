import React from 'react'
import "./ProfilePage.css"
import Card from "../components/Card"
import { RiShareFill } from "react-icons/ri";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
const ProfilePage = () => {
  const myArr = [
    {
      image: "src/assets/download.jpg",
      name: "Jimmy choo",
      price: "23,000",
      description: "Offers elegant and fashionable high heels",
      university: "Lagos State University",
    },
    {
      image: "src/assets/download.jpg",
      name: "Books",
      price: "20,000",
      description: "Description",
      university: "Uni Lag",
    }
  ]
  return (
    <section className='section'> 
      <div className='profiledetails'>
        <div className='profilePixAndDetails'>
        <img className='profilePix' src="/images/Ellipse 22.png" alt="Phone"  />
            <div className='details'>
              <div className='profileDetails'>
                <h3 className='prof1' >
                1 published Ads <IoChevronForwardOutline size={20}/>
                </h3>
                  </div>
                  <div className='profileDetail'>
                  <RiShareFill size={21}/>
                  <h2 className='prof2'> 
                  share user profile
                  </h2>
                  </div>
                  </div>
                <div className='reportdetails'>
                <h2 className='pro3'>
                Report user
              </h2>
              <h2 className='blockUser'>
              Block user
              </h2>
          </div>
          <div className='goBck'>
            <IoArrowBackOutline size={20}/><h2 className='prof4'>
           Go back
           </h2>
          </div>
        </div>
        <div className='andAds'>
          <div className='phonedetail'>
            <h2 className='pro20'>Mobile Phones </h2>
            <h1 className='pro6'>we deal with all kinds with best prices guaranted</h1>
          </div>
          <div className='filterpath'>
            <p className='pro7'>Filter by;</p>
            <div className='pro30'>
            <h3 className='oooo' >Location</h3>
           <h1 className='pro60'> <IoLocationSharp/>  University of Lagos.</h1>
            </div>
          </div>
          <div className='profileCard'>
        {myArr.map((item, index) => (
        <Card key={index} item={item} />
      ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage

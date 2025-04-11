import React from 'react'
import "./ProfilePage.css"
import Card from "../components/Card"
import { FaShareAlt } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";



const ProfilePage = () => {
  const myArr = [
  {
    image: "/public/download.jpg",
    name: "Home Appliances",
    price: "30,000",
    description: "My description",
    university: "Yaba Tech",
  },
  {
    image: "/public/download.jpg",
    name: "Home Appliances",
    price: "30,000",
    description: "My description",
    university: "Yaba Tech",
  }
]
  return (
    <section>
      <div className='profiledetails'>
        <div className='profilePixAndDetails'>
        <img className='profilePix' src="src/assets/Public/Ellipse 22.png" alt="Phone"  />
            <div className='details'>
              <div className='profileDetails'>
                <h3 className='fist'>
                1 published Ads <IoChevronForwardOutline size={20}/>
                </h3>
                  </div>
                  <div className='profileDetail'>
                  <FaShareAlt size={17}/>
                  <h2 className='fist1'> 
                  share user profile
                  </h2>
                  </div>
                  </div>
                <div className='reportdetails'>
                <h2 className='fist3'>
                Report user
              </h2>
              <h2 className='blockUser'>
              Block user
              </h2>
          </div>
          <div className='goBck'>
            <IoMdArrowBack size={20}/><h2>
           Go back
           </h2>
          </div>
        </div>
        <div className='profileandAds'>
          <div className='phonedetail'>
            <h2>Mobile Phones </h2>
            <h1>we deal with all kinds with best prices guaranted</h1>
          </div>
          <div className='filterpath'>
            <h2>Filter by;</h2>
            <h3>Location</h3>
            <h1> <BsFillGeoAltFill/> University of Lagos.</h1>

          </div>
          <div className='profileCard'>
        {myArr.map((item, index) => (
        <Card key={index} item={item} />
      ))}
        </div>
        </div>
        
      </div>
      <div>

      </div>
    </section>
  )
}

export default ProfilePage

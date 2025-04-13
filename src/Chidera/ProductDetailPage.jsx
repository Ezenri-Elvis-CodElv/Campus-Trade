import React from 'react'
import './ProductDetailPage.css'
import Card from "../components/Card"
import { NavLink, useNavigate } from 'react-router-dom';
import { BsFillGeoAltFill } from "react-icons/bs";
import Location from '../components/detailPage/Location'
import { LuBadgeCheck } from "react-icons/lu";
import { IoCopy } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";



const ProductDetailPage = () => {
  
    const ADS = [
      {
        imageUrl: "src/assets/Frame 230 (4).png",
        alt: "HAHA"
      },
      {
        imageUrl: "src/assets/Webb Idea 1 1.png",
        alt: "HAHA"
      }
    ]
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
      },
      {
        image: "src/assets/download.jpg",
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
      },
      {
        image: "src/assets/download.jpg",
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
      }
    ]
  
  return (
    <section className='section'>
      <div className='body'>
        <div className='detailPageInfo'>
          <div className='detailProductinfo'>
            <img className="detailedProductImage" src="/images/phone.jpeg" alt="Phone" />
              <div className="detailedProductInfo">
              <h3 className='projectinfo'>Iphone 13 pro</h3>
              <p className='projectinfo1'> <TbCurrencyNaira size={30}/>350</p>
            </div>
          </div>
          <Location />
          <div className='condition'>
            <h3 className='projectinfo2'>Condition</h3>
            <div className='body1'>
              <button className='btwn'>New</button>
              <button className='active'>Used</button>
            </div>
          </div>
          <div className='description'>
            <h3 className='projectinfo3'>Description</h3>
            <div className='info4'>
              <h1 className='projectinfo4'>Lorem ipsum dolor, sit amet c 
                onsectetur adipisicing elit. <br />
                Pariatur quia quas aliquam s
                oluta dolor  <br />libero vero face
                 dolores.</h1>
            </div>
          </div>
        </div>

        <div className='profileAndPreviousPageButton'>
          <div className='profileAndAds'>
            <div className='profileAndDetails'>
              <div className='profile'>
                <div className='profilePicAndDetails'>
                  <img className='profilePic' src="/images/Ellipse 22.png" alt="Phone"  />
                    <div className='opendiv'>
                      <div className="profileName">
                      <h2 className='joansamuelh2'>Joan Samuel</h2>
                      <LuBadgeCheck size={20} />
                    </div>
                    <div className='profileDateAndLink'>
                      <h4 className='membersincejanuary'>Member since January 2025</h4>
                      <button  className='obvlickbtn' onClick={() => nav('/ProfilePage')} >
                        <span className='spamm'>See profile </span>
                        <IoIosArrowForward size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='profileContact'>
                  <button className='contact phoneNumber'>
                    <IoCopy  size={20}/>
                    <a href="tel: 09149948399">09192298383</a>
                  </button>
                  <button className='contact whatsapp'>
                    <BsFillGeoAltFill />
                    <a href="https://web.whatsapp.com/09149948399">Chat via whatsapp</a>
                  </button>
                </div>
              </div>
              <Location />
            </div>
             <div className='ads'>
            <h4 className='adsnumber'>AD number: 08970u</h4>

              {
                ADS.map((ad, index)=> <img key={index} src={ad.imageUrl} alt={ad.alt} />)
              }
            </div>
          </div>
          <button className='previousPage'>
            <IoMdArrowBack />
            <span className='goback'>Go Back To The Previous Page</span>
          </button>
        </div>
      </div>

      <div className='devices'>
        <div className='deviceHeader'>
          <h2 className='mobiledevicesh2'>Mobile device</h2>
          <p className='mobiledevicesp'>Checkout Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum!</p>
        </div>

      </div>

      <div className="cards">
      {myArr.map((item, index) => (
        <Card key={index} item={item} />
      ))}

       
      </div>
    </section>
  )
}

export default ProductDetailPage

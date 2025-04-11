// import React from 'react'
// import './ProductDetailPage.css'
// import Card from "../components/Card"
// import { BsFillGeoAltFill } from "react-icons/bs";
// import Location from '../components/detailPage/Location'
// import {  useNavigate, } from 'react-router';
// import { LuBadgeCheck } from "react-icons/lu";
// import { IoCopy } from "react-icons/io5";
// import { IoMdArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";



//  const ProductDetailPage = () => {
//   const nav = useNavigate()

//   const ADS = [
//     {
//       imageUrl: "src/assets/Public/Frame 230 (4).png",
//       alt: "HAHA"
//     },
//     {
//       imageUrl: "src/assets/Public/Webb Idea 1 1.png",
//       alt: "HAHA"
//     }
//   ]

//   const myArr = [
//     {
//       image: "/public/download.jpg",
//       name: "Jimmy choo",
//       price: "23,000",
//       description: "Offers elegant and fashionable high heels",
//       university: "Lagos State University",
//     },
//     {
//       image: "/public/download.jpg",
//       name: "Books",
//       price: "20,000",
//       description: "Description",
//       university: "Uni Lag",
//     },
    
//     {
//       image: "/public/download.jpg",
//       name: "Home Appliances",
//       price: "30,000",
//       description: "My description",
//       university: "Yaba Tech",
//     },
//     {
//       image: "/public/download.jpg",
//       name: "Home Appliances",
//       price: "30,000",
//       description: "My description",
//       university: "Yaba Tech",
//     }
    
//   ];
//   return (
//     <section>
//       <div>
//         <div className='detailPageInfo'>
//           <div className='detailProductinfo'>
//             <img className="detailedProductImage" src="src/assets/Public/phone.jpeg" alt="Phone" />
//             <div className="detailedProductInfo">
//               <h3 className='projectinfo'>Iphone 13 pro</h3>
//               <p className='projectinfo1'>$350</p>
//             </div>
//           </div>
//           <Location />
//           <div className='condition'>
//             <h3 className='projectinfo2'>Condition</h3>
//             <div>
//               <button>New</button>
//               <button className='active'>Used</button>
//             </div>
//           </div>
//           <div className='description'>
//             <h3 className='projectinfo3'>Description</h3>
//             <div>
//               <h1 className='projectinfo4'>Lorem ipsum dolor, sit amet c 
//                 onsectetur adipisicing elit. <br />
//                 Pariatur quia quas aliquam s
//                 oluta dolor  <br />libero vero face
//                  dolores.</h1>
//             </div>
//           </div>
//         </div>

//         <div className='profileAndPreviousPageButton'>
//           <div className='profileAndAds'>
//             <div className='profileAndDetails'>
//               <div className='profile'>
//                 <div className='profilePicAndDetails'>
//                   <img className='profilePic' src="src/assets/Public/Ellipse 22.png" alt="Phone"  />
//                     <div>
//                       <div className="profileName">
//                       <h2>Joan Samuel</h2>
//                       <LuBadgeCheck size={20} />
//                     </div>
//                     <div className='profileDateAndLink'>
//                       <h4>Member since January 2025</h4>
//                       <button onClick={() => nav('/ProfilePage')} >
//                         <span>See profile </span>
//                         <IoIosArrowForward size={18} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='profileContact'>
//                   <button className='contact phoneNumber'>
//                     <IoCopy  size={20}/>
//                     <a href="tel: 09149948399">09192298383</a>
//                   </button>
//                   <button className='contact whatsapp'>
//                     <BsFillGeoAltFill />
//                     <a href="https://web.whatsapp.com/09149948399">Chat via whatsapp</a>
//                   </button>
//                 </div>
//               </div>
//               <Location />
//             </div>
//              <div className='ads'>
//             <h4>AD number: 08970u</h4>

//               {
//                 ADS.map((ad, index)=> <img key={index} src={ad.imageUrl} alt={ad.alt} />)
//               }
//             </div>
//           </div>
//           <button className='previousPage'>
//             <IoMdArrowBack />
//             <span>Go Back To The Previous Page</span>
//           </button>
//         </div>
//       </div>

//       <div className='devices'>
//         <div className='deviceHeader'>
//           <h2>Mobile device</h2>
//           <p>Checkout Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum!</p>
//         </div>

//       </div>

//       <div className="cards">
//       {myArr.map((item, index) => (
//         <Card key={index} item={item} />
//       ))}

       
//       </div>
//     </section>
//   )


// }
// export default ProductDetailPage
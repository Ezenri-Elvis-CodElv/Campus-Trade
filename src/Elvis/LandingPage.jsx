import React, { useState } from "react";
import heroBg from "../assets/Public/HomeHeroPageBg.jpg";
import { MdKeyboardArrowRight, MdOutlineBlender } from "react-icons/md";
import "animate.css";
import { useNavigate } from "react-router";
import { FcSmartphoneTablet } from "react-icons/fc";
import { GiClothes, GiConverseShoe } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";

const LandingPage = () => {
  const nav = useNavigate();

  const [dropDown1, setDropDown1] = useState(false)
  const [dropDown2, setDropDown2] = useState(false)
  const [dropDown3, setDropDown3] = useState(false)
  const [dropDown4, setDropDown4] = useState(false)
  const [dropDown5, setDropDown5] = useState(false)

  const toggleDrop1 = () =>{
    setDropDown1(!dropDown1)
    setDropDown2(false)
    setDropDown3(false)
    setDropDown4(false)
    setDropDown5(false)
  }

  const toggleDrop2 = () =>{
    setDropDown1(false)
    setDropDown2(!dropDown2)
    setDropDown3(false)
    setDropDown4(false)
    setDropDown5(false)
  }

  const toggleDrop3 = () =>{
    setDropDown1(false)
    setDropDown2(false)
    setDropDown3(!dropDown3)
    setDropDown4(false)
    setDropDown5(false)
  }

  const toggleDrop4 = () =>{
    setDropDown1(false)
    setDropDown2(false)
    setDropDown3(false)
    setDropDown4(!dropDown4)
    setDropDown5(false)
  }

  const toggleDrop5 = () =>{
    setDropDown1(false)
    setDropDown2(false)
    setDropDown3(false)
    setDropDown4(false)
    setDropDown5(!dropDown5)
  }

  return (
    <div className="w-full h-max flex flex-col justify-center items-center">
      <div className="w-full h-[85vh] bg-amber-500 flex justify-center items-center bg-[rgb(255, 255, 255)]">
        <div
          className="w-[100%] h-[100%] bg-contain  bg-center px-[20px] flex justify-start items-end "
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
          <div className="w-[60%] h-[100%] flex justify-center items-center max-md:">
            <div className="w-[80%] h-[90%]  flex flex-col justify-center gap-4 animate__animated animate__fadeInLeft max-md:">
              <h1 className="text-[55px] font-bold font-[Inter] text-[#050505] text-left leading-tight max-md:text-[30px] ">
                Post your items,
                <br /> <span className="text-[#FF6D00]">connect</span> with{" "}
                <span className="text-[#FF6D00]">buyers</span>, <br /> and trade
                hassle-free!
              </h1>
              <p className="text-[24px] font-xl font-[Inter]  text-black text-left leading-normal max-md:text-[18px]">
                A community-driven marketplace made just for <br /> students
              </p>
              <div className="w-full h-[20%] flex items-start justify-start ">
                <button
                  className="w-[180px] h-[60px] max-md:w-[140px] max-md:h-[50px] flex flex-row justify-center items-center gap-3 rounded-[10px] text-[18px] shadow-2xl cursor-pointer bg-[rgb(74,24,117)] text-white"
                  onClick={() => nav("/signup")}
                >
                  Explore <MdKeyboardArrowRight size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh] bg-[rgb(255,111,0)] flex justify-center items-center">
        <marquee
          behavior="scroll"
          direction="left"
          className="  text-center text-black font-inter text-[18px] font-normal"
        >
          Disclaimer: CampusTrade is a student marketplace that connects buyers
          and sellers. We are not responsible for the quality of items or
          outcomes of transactions. Please trade safely and meet in secure
          locations.
        </marquee>
      </div>

      <div
        className="w-full h-[20vh] flex justify-center items-center"
        style={{
          background:
            "linear-gradient(334deg, rgba(202, 88, 218, 0.18) 14.66%, rgba(195, 131, 203, 0.18) 63.37%)",
        }}
      >
        <div className="w-[85%] h-[100%] flex flex-col justify-start items-center">
          <h2
            className="w-full h-[50%]  font-bold text-2xl flex items-center"
            style={{ color: "rgb(255, 111, 0)" }}
          >
            Categories
          </h2>
          <ul className="w-full h-[50%] flex flex-row gap-5  space-x-9 max-md:space-x-0">
            <li className="relative group cursor-pointer">
              <div className="flex items-center text-shadow-gray-700 text-[16px] gap-2" onClick={toggleDrop1}>
                <FcSmartphoneTablet size={24} /> Gadget <IoIosArrowDown />
              </div>
              {
                dropDown1 &&  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md ">
                <ul>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Laptop
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Mobile Phones
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    iPads
                  </li>
                </ul>
              </div>
              }
             
            </li>

            <li className="relative group cursor-pointer">
              <div className="flex items-center text-shadow-gray-700 text-[16px] gap-2" onClick={toggleDrop2}>
                <GiConverseShoe size={24} /> Gift <IoIosArrowDown />
              </div>
              {
                dropDown2 && <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                <ul>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Casual
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Heels
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Sneakers
                  </li>
                </ul>
              </div>
              }
              
            </li>

            <li className="relative group cursor-pointer">
              <div className="flex items-center text-shadow-gray-700 text-[16px] gap-2" onClick={toggleDrop3}>
                <GiClothes size={24} /> Clothes <IoIosArrowDown />
              </div>
              {
                dropDown3 &&  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                <ul>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Shirt
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Jeans
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Blouse
                  </li>
                </ul>
              </div>
              }

            </li>

            <li className="relative group cursor-pointer">
              <div className="flex items-center text-shadow-gray-700 text-[16px] gap-2" onClick={toggleDrop4}>
                <SiBookstack size={24} /> Books <IoIosArrowDown />
              </div>
              {
                dropDown4 && <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                <ul>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Fiction
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Non-Fiction
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Educational
                  </li>
                </ul>
              </div>
              }
              
            </li>

            <li className="relative group cursor-pointer">
              <div className="flex items-center text-shadow-gray-700 text-[16px] gap-2" onClick={toggleDrop5}>
                <MdOutlineBlender size={24} /> Appliances <IoIosArrowDown />
              </div>
              {
                dropDown5 && <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                <ul>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Beds
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Electric Kettle
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Pressing Iron
                  </li>
                </ul>
              </div>
              }
              
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[100vh] bg-[rgb(255,255,255)] flex justify-center items-center">
        <div className="w-[90%] h-[80%] bg-[rgb(255,255,255)] flex flex-col justify-center items-center">
          <div className="w-full h-[30%] bg-white flex justify-center items-center">
            <div className="w-[50%] h-[90%] max-md:w-full max-md:justify-start flex flex-col justify-center items-center gap-6 max-md:gap-1">
              <h2 className="text-[rgb(255,111,0)] text-2xl font-bold font-[Inter] max-md:text-[18px]">
                Things you can do with CampusTrade:
              </h2>
              <p className="w-[100%] text-center text-[#050505]  font-[Inter] text-base font-medium leading-none max-md:text-[14px] max-md:font-[300]">
                CampusTrade is all about empowering students to make the most of
                their <br />
                items. Why let your stuff gather dust when you can flip it for
                cash knowing <br /> you can do the following .
              </p>
            </div>
          </div>
          <div className="w-full h-[40%]  flex flex-row justify-center items-center gap-24 max-md:gap-7">
            <div className="w-[170px] h-[80%] bg-[#f1eaf7] rounded-3xl  flex justify-center items-center">
              <div className="w-[80%] h-[80%] flex flex-col text-center justify-center items-center gap-3.5 max-md:gap-0 max-md:w-[100%] max-md:h-[100%]">
                <img src="src/assets/mdi_account-cash.svg" alt="" />
                <p class="text-black font-montserrat text-[14px] max-md:text-[14px] not-italic font-normal">
                  Quickly list your items from books to <br /> gadgets to
                  fashion <br />
                  and find <span className="font-bold max-md:font-[100%]">buyers fast.</span>
                </p>
              </div>
            </div>
            <div className="w-[170px] h-[80%] bg-[#f1eaf7] rounded-3xl flex justify-center items-center">
              <div className="w-[80%] h-[80%] flex flex-col text-center justify-center items-center gap-3.5">
                <img src="src/assets/famicons_bulb-sharp.svg" alt="" />
                <p class="text-black font-montserrat text-[14px] not-italic font-normal leading-[150%]">
                  Items into cash while keeping your space clutter-free.
                </p>
              </div>
            </div>
            <div className="w-[170px] h-[80%] bg-[#f1eaf7] rounded-3xl flex justify-center items-center">
              <div className="w-[80%] h-[80%] flex flex-col text-center justify-center items-center gap-3.5">
                <img src="src/assets/Group.svg" alt="" />
                <p class="text-black font-montserrat text-[14px] not-italic font-normal leading-[150%]">
                  Chat with sellers via WhatsApp, or phone without any hassle.
                </p>
              </div>
            </div>
            <div className="w-[170px] h-[80%] bg-[#f1eaf7] rounded-3xl flex justify-center items-center">
              <div className="w-[80%] h-[80%] flex flex-col text-center justify-center items-center gap-3.5">
                <img src="src/assets/mdi_deal.svg" alt="" />
                <p class="text-black font-montserrat text-[14px] not-italic font-normal leading-[150%]">
                  Browse through listings to score amazing deals from fellow
                  students
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[30%] flex flex-col justify-center items-center gap-6">
            <h2 className="text-[rgb(255,111,0)] text-2xl font-bold font-[Inter] ">
              Popular post:
            </h2>
            <p className="w-[100%] text-center text-[#050505]  font-[Inter] text-base font-medium leading-none">
              check out our popular post of the different categories from
              verified <br /> student in campustrade{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh] bg-[rgb(255,255,255)] flex justify-center items-center">
        <div className="w-[90%] h-[80%] bg-[rgb(255,255,255)] flex flex-row justify-center items-center gap-15 ">
          <div className="w-[20%] h-[90%] bg-[rgb(247,247,247)]  rounded-2xl shadow-lg"></div>
          <div className="w-[20%] h-[90%] bg-[rgb(247,247,247)]  rounded-2xl shadow-lg"></div>
          <div className="w-[20%] h-[90%] bg-[rgb(247,247,247)]  rounded-2xl shadow-lg"></div>
          <div className="w-[20%] h-[90%] bg-[rgb(247,247,247)]  rounded-2xl shadow-lg"></div>
        </div>
      </div>
      <div className="w-full h-[70vh] bg-[rgb(238,219,255)] flex justify-center items-center">
        <div className="w-[90%] h-[80%] flex flex-row justify-center items-center">
          <div className="relative w-[40%] h-[100%]">
            <div
              className="absolute top-[5%] max-md:top-0 left-[38%] -translate-x-1/2 w-[226.59px] max-md:w-[150px] h-[151.134px] aspect-[226.59/151.13] flex-shrink-0 rounded-[14.333px] border-[5.017px] border-white bg-cover bg-center bg-no-repeat z-10"
              style={{ backgroundImage: "url('src/assets/Public/Lp2.jpg')" }}
            ></div>

            <div
              className="absolute top-[100px] left-[68%] -translate-x-1/2 w-[180.59px] max-md:w-[130px] max-md:h-[130px] h-[180.134px] aspect-[226.59/151.13] flex-shrink-0 rounded-[14.333px]  bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: "url('src/assets/Public/Lp1.jpg')" }}
            ></div>

            <div
              className="absolute bottom-0 left-[38%] -translate-x-1/2 w-[230.59px] max-md:w-[150px] h-[151.134px] max-md:h-[140px] aspect-[226.59/151.13] flex-shrink-0 rounded-[14.333px]  bg-cover bg-center bg-no-repeat z-10"
              style={{
                backgroundImage: "url('src/assets/Public/AboutUs13.png')",
              }}
            ></div>
          </div>

          <div className="w-[60%] h-[80%]  flex flex-col justify-center gap-10 items-start px-2">
            <p className="text-[#240046] font-[Inter] text-[24px] not-italic font-bold leading-none max-md:text-[18px]">
              About us & what we offer
            </p>
            <p className="text-black font-inter text-[20px] text-base font-normal leading-none max-md:text-[14px]">
              the ultimate marketplace for students to buy, sell, and connect!
              We <br />
              know how fast student life moves, and that’s why we’ve made <br />{" "}
              trading on campus simple, quick, and hassle-free. Whether you’re{" "}
              <br /> looking to sell your old textbooks, snag a cool gadget, or
              find <br />
              fashion steals, CampusTrade has got you covered.
              <br />
              We charge just ₦500 per listing, making it affordable to share
              your <br />
              stuff with fellow students. Plus, buyers connect with sellers
              directly <br /> through WhatsApp or phone — no middleman, no fuss!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[60vh] bg-[rgb(36,0,69)] flex justify-center items-center">
        <div className="w-[90%] h-[80%]  flex flex-row justify-center items-center">
          <div className="w-[40%] h-[100%]  flex justify-center items-center ">
            <img
              src="src/assets/Public/ourmission.jpg"
              alt=""
              className="w-[70%] h-[70%] rounded-2xl  border-3 border-white"
            />
          </div>
          <div className=" w-[60%] h-[100%] flex flex-col justify-center gap-4 items-start px-2">
            <p className="text-white font-[Inter] text-[24px] not-italic font-bold leading-none max-md:text-[18px]">
              Our Mission
            </p>
            <p className="text-white font-inter text-[20px] text-base font-normal leading-none max-md:text-[16px]">
              Our mission is to empower students by turning clutter into cash
              and <br />
              helping you make smart trades on campus. Ready to hustle <br />{" "}
              smarter? Join the CampusTrade community today
            </p>
            <div className="w-full h-[30%]  flex justify-start items-center ">
              <button
                className="w-[180px] h-[60px] max-md:w-[140px] max-md:h-[35pxpx] flex flex-row justify-center items-center gap-3 rounded-[15px] text-[18px] font-medium shadow-2xl cursor-pointer bg-white text-[rgb(74,24,117)]"
                onClick={() => nav("/signup")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80vh] bg-[rgb(255,255,255)] flex justify-center items-center">
        <div className="w-[90%] h-[90%]  flex flex-col justify-center items-center">
          <div className="w-[50%] h-[20%]  flex flex-col gap-1.5 justify-center items-center">
            <p className="text-[#240046] font-[Inter] text-[24px] not-italic font-bold leading-none">
              Testimonials
            </p>
            <p className="text-black font-inter text-[24px] text-base font-normal leading-none">
              Words from those that used Campus Trade
            </p>
          </div>
          <div className="w-full h-[80%] flex overflow-x-auto scroll-smooth gap-x-4 px-4 py-6 flex-nowrap">
            <div className="flex flex-col min-w-[448px] max-w-[448px] h-[250px] bg-[#EEDCFF] rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-4">
                <img src="src/assets/Nnamdi.svg" alt="user" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-[#240046] text-lg font-bold">Nnamdi Samuel</p>
                  <p className="text-black text-sm font-normal">Student</p>
                </div>
              </div>
              <p className="text-[#1E1E1E] text-[20px] font-normal font-[inter] leading-snug">
              "I needed a laptop for my coursework but couldn’t afford a brand-new one. I found a great deal on CampusTrade and connected with the seller instantly. Best decision ever!"              </p>
            </div>

            <div className="flex flex-col min-w-[448px] max-w-[448px] h-[250px] bg-[#EEDCFF] rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-4">
                <img src="src/assets/Ellipse 25.svg" alt="user" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-[#240046] text-lg font-bold">George Joke</p>
                  <p className="text-black text-sm font-normal">Student</p>
                </div>
              </div>
              <p className="text-[#1E1E1E] text-[20px] font-normal font-[inter] leading-snug">
                "CampusTrade helped me kickstart my small business! I sell fashion accessories, and with just a ₦500 listing fee, I’ve made so many sales. Love it!"
              </p>
            </div>


            <div className="flex flex-col min-w-[448px] max-w-[448px] h-[250px] bg-[#EEDCFF] rounded-[20px] shadow-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-4">
                <img src="src/assets/Ikem.svg" alt="user" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-[#240046] text-lg font-bold">Ikeh Peter</p>
                  <p className="text-black text-sm font-normal">Student</p>
                </div>
              </div>
              <p className="text-[#1E1E1E] text-[20px] font-normal font-[inter] leading-snug">
              "I was skeptical at first, but CampusTrade is actually so smooth. I listed my old phone, and within hours, I had multiple buyers reaching out!"              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;

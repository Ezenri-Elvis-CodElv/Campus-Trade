import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdOutlineBlender } from "react-icons/md";
import "animate.css";
import { useNavigate } from "react-router";
import { FcSmartphoneTablet } from "react-icons/fc";
import { GiClothes, GiConverseShoe } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import Card from "../components/Card";
import axios from "axios";
import RecentCard from "../components/RecentCard";

const LandingPage = () => {
  const nav = useNavigate();

  const categoryIcons = {
    Gadgets: <FcSmartphoneTablet className="mr-2" size={20} />,
    Shoes: <GiConverseShoe className="mr-2" size={20} />,
    Clothes: <GiClothes className="mr-2" size={20} />,
    Appliance: <SiBookstack className="mr-2" size={20} />,
    Electronics: <FaApple className="mr-2" size={20} />,
    // Add more categories with their respective icons
  };

  // const myArr = [
  //   {
  //     media: "/images/download.jpg",
  //     name: "Jimmy choo",
  //     price: "23,000",
  //     description: "Offers elegant and fashionable high heels",
  //     university: "Lagos State University",
  //   },
  //   {
  //     media: "/images/download.jpg",
  //     name: "Books",
  //     price: "20,000",
  //     description: "Description",
  //     university: "Uni Lag",
  //   },
  //   {
  //     media: "/images/download.jpg",
  //     name: "Home Appliances",
  //     price: "30,000",
  //     description: "My description",
  //     university: "Yaba Tech",
  //   },
  //   {
  //     media: "/images/download.jpg",
  //     name: "Home Appliances",
  //     price: "30,000",
  //     description: "My description",
  //     university: "Yaba Tech",
  //   },
  // ];

  const [allCategories, setAllCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://campustrade-kku1.onrender.com/api/v1/all-categories"
      );
      setAllCategories(response?.data?.data);
      // setCategoryId(response?.data?.data[0]?.id);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  console.log(allCategories);
  console.log(subCategories);

  return (
    <div className="w-full h-max flex flex-col justify-center items-center">
      <div className="w-full h-[85vh]  flex justify-center items-center">
        <div
          className="w-[100%] h-[100%] max-md:bg-none  bg-contain bg-center px-[20px] flex flex-row max-md:flex-col-reverse max-md: justify-center items-end"
          style={{
            backgroundImage: "url(/images/HomeHeroPageBg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[60%] h-[100%] max-md:w-[100%] max-md:h-[50%] flex justify-center items-center ">
            <div className="w-[80%] h-[90%] max-md:w-full max-md:items-center flex flex-col justify-center gap-4 animate__animated animate__fadeInLeft max-md:bg-white">
              <h1 className="text-[55px] font-bold font-[Inter] text-[#050505] text-left leading-tight max-md:text-[30px]">
                Post your items,
                <br /> <span className="text-[#FF6D00]">connect</span> with{" "}
                <span className="text-[#FF6D00]">buyers</span>, <br /> and trade
                hassle-free!
              </h1>
              <p className="text-[24px] font-xl font-[Inter] text-black text-left leading-normal max-md:text-[18px]">
                A community-driven marketplace made just for <br /> students
              </p>
              <div className="w-full h-[20%] flex items-start max-md:justify-center justify-start">
                <button
                  className="w-[180px] h-[60px] max-md:w-[140px] max-md:h-[50px] flex flex-row justify-center items-center gap-3 rounded-[10px] text-[18px] shadow-2xl cursor-pointer bg-[rgb(74,24,117)] text-white"
                  onClick={() => nav("/explorepage")}
                >
                  Explore <MdKeyboardArrowRight size={30} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[40%] h-[100%]  bg-cover bg-no-repeat bg-center flex justify-center items-center max-md:w-[100%] max-md:h-[50%] ">
            <img
              src="/images/mobileherobg.jpg"
              alt="background-image"
              className="hidden max-md:block"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[8vh] bg-[rgb(255,111,0)] flex justify-center items-center">
        <marquee
          behavior="scroll"
          direction="left"
          className="text-center text-black font-inter text-[18px] font-normal"
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
        <div className="w-[85%] h-[100%] flex flex-col pl-16 justify-start items-center">
          <h2
            className="w-full h-[50%] font-bold text-2xl flex items-center"
            style={{ color: "rgb(255, 111, 0)" }}
          >
            Categories
          </h2>
          <ul className="w-full h-[50%] flex  gap-5 max-md:gap-[2px] space-x-9 max-md:space-x-0">
            {allCategories.map((category) => (
              <li
                className="relative group cursor-pointer flex"
                key={category?.id}
                onClick={(e) => {
                  setSubCategories(category?.Subcategories || []);
                }}
              >
                {categoryIcons[category?.name] || (
                  <FcSmartphoneTablet className="mr-2" size={20} />
                )}
                {category.name}
              </li>
            ))}
          </ul>
          {subCategories.map((subCategory) => (
            <li
              className="text-bklack  text-[18px]  cursor-pointer"
              key={subCategory?.id}
              // onClick={() => nav(`/categories/${subCategory?.name}`)}
              onClick={() => nav(`/categories/${subCategory?.id}?name=${subCategory?.name}`)}
            >
              {subCategory?.name}
            </li>
          ))}
        </div>
      </div>

      <div className="w-full h-[100vh] max-md:h-[120vh] max-md: bg-[rgb(255,255,255)]  flex justify-center items-center">
        <div className="w-[90%] h-[80%] max-md:h-full bg-[rgb(255,255,255)] max-md:gap-2.5  flex flex-col justify-center items-center">
          <div className="w-full h-[30%] bg-white max-md:h-[20%]  flex justify-center items-center">
            <div className="w-[50%] h-[90%] max-md:w-full max-md:justify-start flex flex-col justify-center items-center gap-6 max-md:gap-4">
              <h2 className="text-[rgb(255,111,0)] text-2xl font-bold font-[Inter] max-md:text-[18px]">
                Things you can do with CampusTrade:
              </h2>
              <p className="w-[100%] text-center text-[#050505] font-[Inter] text-base font-medium leading-none max-md:text-[14px] max-md:font-[300]">
                CampusTrade is all about empowering students to make the most of
                their <br />
                items. Why let your stuff gather dust when you can flip it for
                cash knowing <br /> you can do the following .
              </p>
            </div>
          </div>
          <div className="w-full h-[40%]  flex flex-row max-md:flex-col max-md:h-[90%] justify-around items-center  max-md:gap-2 ">
            <div className="w-[200px] h-[100%] max-md:translate-x-1/2 bg-[#f1eaf7] max-md:w-[200px] max-md:h-[100%] rounded-3xl flex justify-center items-center">
              <div className="w-[80%] h-[80%] flex flex-col text-center justify-center items-center gap-3.5  max-md:gap-0 max-md:w-[100%] max-md:h-[100%]">
                <img src="/images/mdi_account-cash.svg" alt="" />
                <p className="text-black font-montserrat text-[14px] max-md:text-[14px] not-italic font-normal">
                  Quickly list your items from books to <br /> gadgets to
                  fashion <br />
                  and find{" "}
                  <span className="font-bold max-md:font-[100%]">
                    buyers fast.
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[200px] h-[100%] max-md:-translate-x-1/2 max-md:w-[200px] max-md:h-[100%] bg-[#f1eaf7] rounded-3xl flex justify-center items-center">
              <div className="w-[80%] h-[80%] flex flex-col text-center justify-center items-center gap-3.5">
                <img src="/images/famicons_bulb-sharp.svg" alt="" />
                <p className="text-black font-montserrat text-[14px] not-italic font-normal leading-[150%]">
                  Items into cash while keeping your space clutter-free.
                </p>
              </div>
            </div>
            <div className="w-[200px] h-[100%] max-md:translate-x-1/2 max-md:w-[200px] max-md:h-[100%] bg-[#f1eaf7] rounded-3xl flex justify-center items-center">
              <div className="w-[80%] h-[80%] flex flex-col text-center justify-center items-center gap-3.5">
                <img src="/images/Group.svg" alt="" />
                <p className="text-black font-montserrat text-[14px] not-italic font-normal leading-[150%]">
                  Chat with sellers via WhatsApp, or phone without any hassle.
                </p>
              </div>
            </div>
            <div className="w-[200px] h-[100%]  max-md:-translate-x-1/2 max-md:w-[200px] max-md:h-[100%] bg-[#f1eaf7] rounded-3xl flex justify-center items-center">
              <div className="w-[80%] h-[80%] flex flex-col text-center justify-center items-center gap-3.5">
                <img src="/images/mdi_deal.svg" alt="" />
                <p className="text-black font-montserrat text-[14px] not-italic font-normal leading-[150%]">
                  Browse through listings to score amazing deals from fellow
                  students
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[30%]  max-md:h-[20%]  flex flex-col justify-center items-center gap-6">
            <h2 className="text-[rgb(255,111,0)] text-2xl font-bold font-[Inter]">
              Popular post:
            </h2>
            <p className="w-[100%] text-center text-[#050505] font-[Inter] text-base font-medium leading-none">
              check out our popular post of the different categories from
              verified <br /> student in campustrade{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[60vh] max-md:h[80vh] max-md:p-6 bg-white flex justify-center items-center">
        <div className="w-[90%] h-full flex flex-wrap justify-center items-center gap-6">
          
           {/* {products.map((item, index) => (
            <RecentCard key={index} item={item} />
          ))} */}
        </div>
      </div>

      <div className="w-full h-[60vh] max-md:h-[] bg-[rgb(238,219,255)]  flex justify-center items-center py-4">
        <div className="w-[90%] h-full max-md:h-auto flex flex-row max-md:flex-col max-md:gap-7 justify-center items-center">
          <div className="relative w-[40%] h-full max-md:w-full max-md:h-auto flex justify-center items-center">
            <div className="w-full h-full relative hidden md:block">
              <div
                className="absolute top-[7%] left-[38%] -translate-x-1/2 w-[226.59px] h-[151.134px] rounded-[14.333px] border-[5.017px] border-white bg-cover bg-center bg-no-repeat z-10"
                style={{ backgroundImage: "url(/images/Lp2.jpg)" }}
              ></div>
              <div
                className="absolute top-[100px] left-[68%] -translate-x-1/2 w-[180.59px] h-[180.134px] rounded-[14.333px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/Lp1.jpg)" }}
              ></div>
              <div
                className="absolute bottom-[7%] left-[38%] -translate-x-1/2 w-[230.59px] h-[151.134px] rounded-[14.333px] bg-cover bg-center bg-no-repeat z-10"
                style={{ backgroundImage: "url(/images/AboutUs13.png)" }}
              ></div>
            </div>

            <div className="hidden max-md:flex p-4 flex-row gap-3">
              <div
                className="w-[100px] h-[100px] rounded-[14px] border-[3px] border-white bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/Lp2.jpg)" }}
              ></div>
              <div
                className="w-[100px] h-[100px] rounded-[14px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/Lp1.jpg)" }}
              ></div>
              <div
                className="w-[100px] h-[100px] rounded-[14px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/AboutUs13.png)" }}
              ></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-[60%] max-md:w-full h-[80%] flex flex-col justify-center gap-6 items-start px-2 mt-4 max-md:mt-6">
            <p className="text-[#240046] font-[Inter] max-md:text-center max-md:w-full max-md:pt-2.5 text-[24px] font-bold leading-none max-md:text-[18px]">
              About us & what we offer
            </p>
            <p className="text-black font-inter text-[20px] font-normal leading-relaxed max-md:text-[14px]">
              The ultimate marketplace for students to buy, sell, and connect!
              <br className="max-md:hidden" />
              We know how fast student life moves, and that’s why we’ve made
              <br className="max-md:hidden" />
              trading on campus simple, quick, and hassle-free. Whether you’re
              <br className="max-md:hidden" />
              looking to sell your old textbooks, snag a cool gadget, or find
              <br className="max-md:hidden" />
              fashion steals, CampusTrade has got you covered.
              <br className="max-md:hidden" />
              We charge just ₦500 per listing, making it affordable to share
              your
              <br className="max-md:hidden" />
              stuff with fellow students. Plus, buyers connect with sellers
              directly
              <br className="max-md:hidden" />
              through WhatsApp or phone — no middleman, no fuss!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[60vh] bg-[rgb(36,0,69)] flex  justify-center items-center">
        <div className="w-[90%] h-[80%] flex flex-row max-md:flex-col max-md:gap-4 justify-center items-center">
          <div className="w-[40%] h-[100%] max-md:w-[80%] flex justify-center items-center">
            <img
              src="/images/ourmission.jpg"
              alt="Our Mission"
              className="w-[70%] h-[70%] rounded-2xl border-3 border-white max-md:w-[400px] max-md:h-[200px]"
            />
          </div>
          <div className="w-[60%] h-[100%] max-md:w-[90%] max-md:text-center flex flex-col justify-center gap-4 items-start px-2">
            <p className="text-white font-[Inter] max-md:w-[90%] max-md:text-center text-[24px] not-italic font-bold leading-none max-md:text-[20px]">
              Our Mission
            </p>
            <p className="text-white font-inter text-[20px] text-base font-normal leading-none max-md:text-[16px]">
              Our mission is to empower students by turning clutter into cash
              and <br />
              helping you make smart trades on campus. Ready to hustle <br />
              smarter? Join the CampusTrade community today
            </p>
            <div className="w-full h-[30%] flex justify-start items-center max-md:justify-center">
              <button
                className="w-[180px] h-[60px] max-md:w-[140px] max-md:h-[50px] flex flex-row justify-center items-center gap-3 rounded-[15px] text-[18px] font-medium shadow-2xl cursor-pointer bg-white text-[rgb(74,24,117)]"
                onClick={() => nav("/signup")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[80vh] max-md:h-[60vh] bg-[rgb(255,255,255)] flex justify-center items-center">
        <div className="w-[90%] h-[90%] flex flex-col  justify-center items-center">
          <div className="w-[50%] max-md:w-[90%] h-[30%] max-md:h-[5%] flex flex-col gap-1.5 justify-center items-center">
            <p className="text-[#240046] font-[Inter] text-[24px] not-italic font-bold leading-none">
              Testimonials
            </p>
            <p className="text-black font-inter text-[24px] max-md:text-[16px] max-md:w-full  text-base font-normal leading-none">
              Words from those that used Campus Trade
            </p>
          </div>
          <div className="w-[80%] max-md:w-full h-[70%]  flex overflow-x-auto items-center scroll-smooth gap-x-4 px-4 py-6 flex-nowrap">
            <div className="flex flex-col min-w-[448px] max-w-[448px] h-[250px] max-md:min-w-[320px] max-md:h-[230px]  bg-[#EEDCFF] rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/Nnamdi.svg"
                  alt="user"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#240046] text-lg font-bold">
                    Nnamdi Samuel
                  </p>
                  <p className="text-black text-sm font-normal">Student</p>
                </div>
              </div>
              <p className="text-[#1E1E1E] text-[20px] max-md:text-[16px] font-normal font-[inter] leading-snug">
                "I needed a laptop for my coursework but couldn’t afford a
                brand-new one. I found a great deal on CampusTrade and connected
                with the seller instantly. Best decision ever!"
              </p>
            </div>
            <div className="flex flex-col min-w-[448px] max-w-[448px] h-[250px]  max-md:min-w-[320px] max-md:h-[230px]  bg-[#EEDCFF] rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/Nnamdi.svg"
                  alt="user"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#240046] text-lg font-bold">
                    Solomon Azeez
                  </p>
                  <p className="text-black text-sm font-normal">Student</p>
                </div>
              </div>
              <p className="text-[#1E1E1E] text-[20px] max-md:text-[16px] font-normal font-[inter] leading-snug">
                "My worn-out shoes were killing my campus walks 🚶♂️… until I
                snagged barely-used sneakers on CampusTrade! Seller was super
                chill—now I’m striding in comfort and style. 👟✨ #ThriftySteps
                #CampusTradeFinds"
              </p>
            </div>

            <div className="flex flex-col min-w-[448px] max-w-[448px] h-[250px]  max-md:min-w-[320px] max-md:h-[230px]   bg-[#EEDCFF] rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/Ellipse 25.svg"
                  alt="user"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#240046] text-lg font-bold">
                    Esther Chizaram
                  </p>
                  <p className="text-black text-sm font-normal">Student</p>
                </div>
              </div>
              <p className="text-[#1E1E1E] text-[20px] max-md:text-[16px] font-normal font-[inter] leading-snug">
                "Dorm bed shopping had me stressed—new ones cost a fortune!
                Found a cozy, like-new mattress on CampusTrade. Fast pickup,
                saved $$$, and now I sleep like a (broke) queen. 🛏️💤
                #DormRoomUpgrade #CampusTradeMagic"
              </p>
            </div>
            <div className="flex flex-col min-w-[448px] max-w-[448px] h-[250px]  max-md:min-w-[320px] max-md:h-[230px]  bg-[#EEDCFF] rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/Ellipse 25.svg"
                  alt="user"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#240046] text-lg font-bold">
                    Imelda Francess
                  </p>
                  <p className="text-black text-sm font-normal">Student</p>
                </div>
              </div>
              <p className="text-[#1E1E1E] text-[20px] max-md:text-[16px] font-normal font-[inter] leading-snug">
                "CampusTrade helped me kickstart my small business! I sell
                fashion accessories, and with just a 5% listing fee, I’ve made
                so many sales. Love it!"
              </p>
            </div>

            <div className="flex flex-col p-9 min-w-[448px] max-w-[448px] h-[250px] max-md:min-w-[320px] max-md:h-[230px]  bg-[#EEDCFF] rounded-[20px] shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/Ikem.svg"
                  alt="user"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#240046] text-lg font-bold">Ikeh Peter</p>
                  <p className="text-black text-sm font-normal">Student</p>
                </div>
              </div>
              <p className="text-[#1E1E1E] text-[20px] max-md:text-[16px] font-normal font-[inter] leading-snug">
                "I was skeptical at first, but CampusTrade is actually so
                smooth. I listed my old phone, and within hours, I had multiple
                buyers reaching out!"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 h-[20vh] w-full flex flex-col justify-center items-center px-4">
  <h2 className="text-lg font-semibold mb-1">Newsletter</h2>
  <p className="text-sm text-gray-600 text-center mb-3 max-w-md">
    Be the first to know about discounts, offers, and events weekly in your mailbox. Unsubscribe anytime with one click.
  </p>
  <div className="flex flex-col  w-[50%] h-[30%] sm:flex-row items-center gap-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="border border-black w-[70%] px-4 py-2 rounded h-[100%] focus:outline-none focus:ring-2 focus:ring-red-400"
    />
    <button className="bg-[rgb(122,48,186)] text-white w-[30%] h-[100%] px-6 py-2 max-md:h-[100%] max-md:w-[100%]  rounded hover:bg-purple-500 transition">
      Subscribe
    </button>
  </div>
</div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router";

const Footer = () => {
  const nav = useNavigate();

  return (
    <div
      className="w-full h-[515px] flex justify-center items-center"
      style={{
        background: "linear-gradient(189deg, #4E1881 -14.84%, #17101C 71.63%)",
      }}
    >
      <div className="w-[90%] h-[90%]  flex flex-col  justify-center items-center">
        <div className="w-[100%] h-[65%] flex flex-row  justify-center items-center gap-4">
          <div className="w-[20%] h-[80%] flex flex-col justify-startr items-start px-1 text-white font-[Inter]">
            <h2
              className="text-white text-[24px] max-md:text-[18px] font-bold mb-4"
              onClick={() => nav("/")}
            >
              Home
            </h2>
            <p
              className="text-white text-[16px] maax-md:text-[12px] font-normal mb-2"
              onClick={() => nav("/popularpost")}
            >
              Popular post
            </p>
            <p
              className="text-white text-[16px] max-md:text-[12px] font-normal mb-2"
              onClick={() => nav("/categories")}
            >
              Categories
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Testimonies
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Advertisement
            </p>
          </div>
          <div className="w-[20%] h-[80%]  flex flex-col justify-start items-start px-1 text-white font-[Inter]">
            <h2
              className="text-white text-[24px] max-md:text-[18px] font-bold mb-4"
              onClick={() => nav("/aboutus")}
            >
              About us
            </h2>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Mission
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Vision
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Contact us{" "}
            </p>
            <p
              className="text-white text-[16px] font-normal mb-2"
              onClick={() => nav("/address")}
            >
              Address
            </p>
          </div>
          <div className="w-[20%] h-[80%]  flex flex-col justify-start items-start px-1 text-white font-[Inter]">
            <h2 className="text-white text-[24px] max-md:text-[18px] font-bold mb-4">
              Products{" "}
            </h2>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Gadget
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Shoes
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Mobile devices{" "}
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Appliances
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Books
            </p>
          </div>
          <div className="w-[20%] h-[80%]  flex flex-col justify-start items-start px-1 text-white font-[Inter]">
            <h2 className="text-white text-[24px] max-md:text-[18px] font-bold mb-4">
              Schools{" "}
            </h2>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Lasu
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Yaba Tech
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Laspo Techs{" "}
            </p>
          </div>
          <div className="w-[20%] h-[80%]  flex flex-col justify-start items-start px-1 text-white font-[Inter]">
            <h2 className="text-white text-[24px] max-md:text-[18px] font-bold mb-4">
              Privacy & policy{" "}
            </h2>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              About us
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Faq
            </p>
            <p className="text-white text-[16px] max-md:text-[12px] font-normal mb-2">
              Terms and condition{" "}
            </p>
          </div>
        </div>
        <div className="w-[70%] h-[35%] ">
          <div className="w-[100%] h-[50%] flex flex-row ">
            <div className="w-[50%] h-[100%] ">
              <img
                src="/images/CAMPUSTRADE-02 1.png"
                alt=""
                onClick={() => nav("/")}
              />
            </div>
            <div className="w-[50%] h-full text-white flex flex-row justify-center items-center gap-7">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.linkedin.com/in/campus-trade-ab1164361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                {" "}
                <FaLinkedin size={30} />
              </a>
              <a href="https://youtube.com/@campustrade_9?si=p229VM7-v7HN9-J-" target="_blank" rel="noopener noreferrer">
                {" "}
                <FaYoutube size={30} />
              </a>
              <a href="https://www.instagram.com/campus_trade90?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>

              <a
                href="https://x.com/Campus_Trade9?t=mb_HnBYIvQdx35hrje42xA&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
          <div className="w-[100%] h-[50%]  border-b max-md:border-[none] border-gray-300 px-4 py-2 flex justify-center items-end">
            <p className="text-xl max-md:text-[10px] text-gray-500 ">
              &copy; {new Date().getFullYear()} Campus Trade. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

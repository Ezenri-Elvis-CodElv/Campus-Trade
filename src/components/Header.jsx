import React, { useEffect, useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);
  const institutionButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        institutionButtonRef.current &&
        !institutionButtonRef.current.contains(event.target)
      ) {
        setIsDropdownVisible(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const nav = useNavigate();

  const [dropdown, setDropDown] = useState(false)

  return (
    <div
  className={`w-full h-[11vh] flex justify-center bg-white font-[Inter] items-center transition-all duration-500 ease-in-out ${
    isSticky
      ? "fixed top-0 left-0 right-0 z-50 shadow-md  backdrop-blur-md"
      : "relative"
  }`}
>

      <div className="w-[90%] h-[80%] bg-white flex flex-row justify-center items-center">
        <div className="w-[45%] h-[100%] bg-white flex flex-row justify-center items-center ">
          <div className="w-[40%] h-[100%]">
            <img
              src="src/assets/Public/CAMPUSTRADE-02 1.png"
              alt="Logo"
              onClick={() => nav("/")}
              className="cursor-pointer"
            />
          </div>
          <div className="w-[55%] h-[100%] flex flex=row justify-center items-center gap-15">
            <h3 className="cursor-pointer text-black font-inter text-base font-[Inter]  leading-normal max-md:hidden">Home</h3>
            <h3
              ref={institutionButtonRef}
              className="flex flex-row justify-center items-center cursor-pointer text-black font-inter text-base font-normal leading-normal max-md:hidden"
              onClick={toggleDropdown}
            >
              Institution <IoIosArrowDown size={20} />
            </h3>
            {isDropdownVisible && (
              <div
                ref={dropdownRef}
                className="absolute top-[100%] left-[25%] rounded-2xl mt-2 w-[250px] bg-[rgb(3, 4, 94)] text-white  shadow-md z-10"
              >
                <ul className=" bg-blue-950 text-white rounded-2xl">
                  <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                    Lagos State University
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                    University Of Lagos State
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                    Yaba College Of Technology
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="w-[30%] h-[85%] flex flex-row justify-start rounded-[25px] p-4 border border-solid border-grey-300 items-center text-gray-500 text-base font-normal relative ">
          <CiSearch
            size={25}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full pl-10 pr-4 text-gray-500 bg-transparent focus:outline-none"
          />
        </div>

        <div className="w-[30%] h-[100%] flex flex-row justify-end items-center gap-8">
          <button
            onClick={() => nav("/login")}
            className="w-[100px] h-[40px] cursor-pointer text-black transition-all duration-300 ease-in-out hover:text-white hover:bg-navy-700 transform hover:scale-105 hover:bg-[rgb(122,48,187)] hover:rounded-[10px] max-md:hidden"
          >
            Login
          </button>

          <button
            onClick={() => nav("/signup")}
            className="w-[100px] h-[40px] cursor-pointer bg-[rgb(122,48,187)] text-white rounded-lg transition-all duration-300 ease-in-out  hover:bg-[rgb(91, 55, 117)] transform hover:scale-105 max-md:hidden"
          >
            Sign up
          </button>
          <div className="block md:hidden relative">
  <img
    src="src/assets/Burger.svg"
    alt="menu"
    onClick={() => setDropDown(!dropdown)}
    className="cursor-pointer"
  />

  {dropdown && (
    <div className="absolute left-10 mt-2 w-full  top-14 inset-0 z-50 bg-emerald-600 flex justify-center items-center">
      <div className="w-[90%] h-[80%] bg-amber-600 p-4 rounded-lg shadow-lg">
      </div>
    </div>
  )}
</div>


        </div>
      </div>
    </div>
  );
};

export default Header;

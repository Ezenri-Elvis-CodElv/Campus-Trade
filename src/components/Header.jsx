import React, { useEffect, useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";
import CampusTrade from "../../src/assets/CAMPUSTRADE-02 1.png"
const Header = () => {
  const [dropdown, setDropDown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); 
  const [isSticky, setIsSticky] = useState(false); 
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); 
  const dropdownRef = useRef(null);
  const institutionButtonRef = useRef(null);
  const nav = useNavigate();

  const toggleCategoryDropdown = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null); 
    } else {
      setActiveCategory(category); 
    }
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

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

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-full h-[11vh] flex justify-center items-center transition-all duration-500 ease-in-out ${
        isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-md bg-white" : "relative bg-white"
      }`}
    >
      <div className="w-[90%] h-[80%] flex justify-between items-center">
        <div className="flex items-center w-[45%] max-md:w-[30%] gap-10">
          <img
            src={CampusTrade}
            alt="CampusTrade Logo"
            onClick={() => nav("/")}
            className="cursor-pointer max-md:w-full max-md:h-[70%] object-contain"
          />

          <div className="flex gap-6 items-center max-md:hidden">
            <h3 className="cursor-pointer text-black text-[20px]" onClick={() => nav("/")}>
              Home
            </h3>
            <h3
              ref={institutionButtonRef}
              className="flex items-center cursor-pointer text-black text-[20px]"
              onClick={toggleDropdown}
            >
              Institution <IoIosArrowDown size={20} />
            </h3>

            {isDropdownVisible && (
              <div
                ref={dropdownRef}
                className="absolute top-[80px] left-[20%] flex justify-center  items-center h-[130px] rounded-2xl mt-2 w-[250px] bg-[rgb(3,4,94)] text-white shadow-md z-50"
              >
                <ul className="rounded-2xl w-full h-full flex flex-col   items-center">
                  {["Lagos State University", "University Of Lagos State", "Yaba College Of Technology"].map((name) => (
                    <li key={name} className="w-[95%] h-[90%] hover:bg-gray-500 cursor-pointer">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="w-[30%] h-[85%] border border-gray-300 rounded-[25px] px-4 flex items-center relative max-md:w-[50%] max-md:h-[50%]">
          <CiSearch size={25} className=" left-4 max-md:hidden text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 max-md:pl-[10px] bg-transparent focus:outline-none text-gray-500"
          />
        </div>

        <div className="flex items-center justify-end w-[30%] max-md:w-[20%] gap-4">
          <button
            onClick={() => nav("/login")}
            className="w-[100px] h-[40px] hidden md:block text-black hover:text-white hover:bg-[rgb(122,48,187)] hover:rounded-[10px] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={() => nav("/signup")}
            className="w-[100px] h-[40px] hidden md:block text-white bg-[rgb(122,48,187)] rounded-lg hover:bg-[rgb(91,55,117)] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign up
          </button>

          <div className="block md:hidden relative">
            <img
              src="/Burger.svg"
              alt="Menu"
              onClick={() => setDropDown(!dropdown)}
              className="cursor-pointer"
            />

            {dropdown && (
              <div className="fixed top-[100px] left-0 w-full h-full z-10 bg-[rgb(36,0,69)] text-white px-6 py-8 flex flex-col gap-6 transition-all duration-100 ease-in-out">
                <div className="flex justify-between items-center mb-4">
                
                </div>
                <ul className="flex flex-col gap-4 text-lg z-10 bg-[rgb(36,0,69)]">
                  <li
                    onClick={() =>
                      nav('/')}
                    className="font-bold text-orange-500 cursor-pointer"
                  >
                    Home
                  </li>

                  <li className="font-bold text-orange-500">Location</li>
                  <li className="pl-4 cursor-pointer">Lagos State University</li>
                  <li className="pl-4 cursor-pointer">University of Lagos</li>

                  <li className="font-bold text-orange-500 mt-2">Categories</li>

                  <li
                    onClick={() => toggleCategoryDropdown("gadget")}
                    className="pl-4 cursor-pointer flex flex-row justify-between items-center"
                  >
                    Gadget <IoIosArrowDown />
                  </li>
                  {activeCategory === "gadget" && (
                    <ul className="pl-8">
                      <li className="cursor-pointer">Mobile Phone</li>
                      <li className="cursor-pointer">Tablets</li>
                      <li className="cursor-pointer">Laptops</li>
                    </ul>
                  )}

                  <li
                    onClick={() => toggleCategoryDropdown("book")}
                    className="pl-4 cursor-pointer flex flex-row justify-between items-center"
                  >
                    Books <IoIosArrowDown />
                  </li>
                  {activeCategory === "book" && (
                    <ul className="pl-8">
                      <li className="cursor-pointer">Fictional Books</li>
                      <li className="cursor-pointer">Non-Fictional Books</li>
                      <li className="cursor-pointer">Educational Books</li>
                    </ul>
                  )}

                  <li
                    onClick={() => toggleCategoryDropdown("clothes")}
                    className="pl-4 cursor-pointer flex flex-row justify-between items-center"
                  >
                    Clothes <IoIosArrowDown />
                  </li>
                  {activeCategory === "clothes" && (
                    <ul className="pl-8">
                      <li className="cursor-pointer">Jeans</li>
                      <li className="cursor-pointer">Shirt</li>
                      <li className="cursor-pointer">Blouse</li>
                    </ul>
                  )}

                  <li
                    onClick={() => toggleCategoryDropdown("shoes")}
                    className="pl-4 cursor-pointer flex flex-row justify-between items-center"
                  >
                    Shoes <IoIosArrowDown />
                  </li>
                  {activeCategory === "shoes" && (
                    <ul className="pl-8">
                      <li className="cursor-pointer">Casual</li>
                      <li className="cursor-pointer">Heels</li>
                      <li className="cursor-pointer">Sneakers</li>
                    </ul>
                  )}

                  <li
                    onClick={() => toggleCategoryDropdown("homeAppliances")}
                    className="pl-4 cursor-pointer flex flex-row justify-between items-center"
                  >
                    Home Appliances <IoIosArrowDown />
                  </li>
                  {activeCategory === "homeAppliances" && (
                    <ul className="pl-8">
                      <li className="cursor-pointer">Beds</li>
                      <li className="cursor-pointer">Kitchen Utensils</li>
                    </ul>
                  )}

                  <li className="font-bold text-orange-500 mt-2 cursor-pointer"  onClick={() =>
                      nav('/explorepage')}>Explore more</li>
                  <li className="font-bold text-white mt-2 cursor-pointer"  onClick={() =>
                      nav('/signup')}>Sign Up</li>
                  <li className="font-bold text-white mt-2 cursor-pointer"  onClick={() =>
                      nav('/login')}>Login</li>

                </ul>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

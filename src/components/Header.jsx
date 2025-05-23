import React, { useEffect, useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Burger from "../../public/images/Burger.svg";
import { Drawer } from "antd";
import axios from "axios";

import { SearchContext } from "../context/SearchProducts";
import { useContext } from "react";

import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [subcategories, setSubcategories] = useState({});
  const [search, setSearch] = useState("");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);
  const institutionButtonRef = useRef(null);
  const nav = useNavigate();
  console.log(search)


  const toggleCategoryDropdown = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const toggleSchoolsDropdown = () => {
    setIsDropdownVisible(prev => !prev);
  };

  const toggleCategory = (category) => {
    setActiveCategory(prev => (prev === category ? null : category));
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 200);
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        institutionButtonRef.current && !institutionButtonRef.current.contains(event.target)) {
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

  const token = localStorage.getItem("token");
  const isLoggedIn = token ? JSON.parse(token) : null;

  return (
    <header
      className={`w-full h-[11vh] flex justify-center items-center transition-all duration-500 ease-in-out ${
        isSticky
          ? "fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-md bg-white"
          : "relative bg-white"
      }`}
    >
      <div className="w-[90%] h-[80%] flex justify-between items-center">
        <div className="flex items-center w-[45%] max-md:w-[30%] gap-10">
          <img
            src="/images/CAMPUSTRADE-02 1.png"
            alt="CampusTrade Logo"
            onClick={() => nav("/")}
            className="cursor-pointer max-md:w-full max-md:h-[70%] object-contain"
          />

          <nav className="flex gap-6 items-center max-md:hidden">
            <h3 className="cursor-pointer text-black text-[20px]" onClick={() => nav("/")}>Home</h3>
            <h3
              ref={institutionButtonRef}
              className="flex items-center cursor-pointer text-black text-[20px]"
              onClick={toggleSchoolsDropdown}
            >
              Schools <IoIosArrowDown size={15} />
            </h3>

            {isDropdownVisible && (
              <div
                ref={dropdownRef}
                className="absolute top-[80px] left-[20%] flex justify-center items-center h-[130px] rounded-2xl mt-2 w-[250px] bg-[rgb(36,0,69)] text-white shadow-md z-50"
              >
                <ul className="rounded-2xl w-full h-full flex flex-col p-4 items-center">
                  {["Lagos State University", "University Of Lagos", "Yaba College Of Technology"].map((name) => (
                    <li
                      key={name}
                      className="w-[90%] h-[90%] flex flex-col justify-center items-center hover:bg-gray-500 hover:h-[70%] cursor-pointer"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
        </div>

        <div className="w-[30%] h-[85%] border border-gray-300 rounded-[25px] flex justify-around items-center relative max-md:w-[50%] max-md:h-[50%]">
          <CiSearch size={25} className="text-gray-500 max-md:hidden" />
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] pl-[10px] font-medium focus:outline-none text-gray-500"
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}} 

          />
        </div>

        <div className="flex items-center justify-end w-[30%] max-md:w-[20%] gap-4">
          {!isLoggedIn ? (
            <>
              <button 
                onClick={() => nav("/login")} 
                className="w-[100px] h-[40px] hidden md:block text-black hover:text-white hover:bg-[rgb(122,48,187)] hover:rounded-[10px] transition duration-300 ease-in-out"
              >
                Login
              </button>
              <button 
                onClick={() => nav("/signup")} 
                className="w-[100px] h-[40px] hidden md:block text-white bg-[rgb(122,48,187)] rounded-lg hover:bg-[rgb(91,55,117)] transition duration-300 ease-in-out"
              >
                Sign up
              </button>
            </>
          ) : (
            <div
              className="flex flex-col justify-center items-center text-black cursor-pointer text-[14px] font-medium max-md:hidden"
              onClick={() => nav("/dashboard")}
            >
              <FaUserCircle size={30} /> Dashboard
            </div>
          )}

          <div className="block md:hidden relative">
            <img 
              src={Burger} 
              alt="Menu" 
              onClick={() => setDrawerVisible(true)} 
              className="cursor-pointer w-8 h-8" 
            />
          </div>
        </div>
      </div>

      <Drawer
        title="CampusTrade Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={300}
        className="[&_.ant-drawer-content]:bg-[#240046] [&_.ant-drawer-title]:text-white [&_.ant-drawer-header]:border-b-[rgba(255,255,255,0.3)]"
        headerStyle={{ 
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)", 
          padding: "16px 20px" 
        }}
        bodyStyle={{ 
          backgroundColor: "#240046", 
          color: "white", 
          padding: 20 
        }}
      >
        <ul className="flex flex-col gap-4 text-lg text-white bg-[#240046]">
          <li 
            className="font-bold text-orange-500 cursor-pointer" 
            onClick={() => { nav("/"); setDrawerVisible(false); }}
          >
            Home
          </li>
          
          <li className="font-bold text-orange-500">Schools</li>
          {["Lagos State University", "University of Lagos", "Yaba College Of Technology"].map((name) => (
            <li 
              key={name}
              className="pl-4 cursor-pointer hover:text-orange-300" 
              onClick={() => setDrawerVisible(false)}
            >
              {name}
            </li>
          ))}

          <li className="font-bold text-orange-500 mt-2">Categories</li>
          {allCategories.map((category) => (
            <React.Fragment key={category?.id}>
              <li
                onClick={() => toggleCategory(category?.name)}
                className="pl-4 cursor-pointer flex justify-between items-center hover:text-orange-300"
              >
                {category.name} <IoIosArrowDown />
              </li>
              {activeCategory === category?.id && category.subCategories && (
                <ul className="pl-8">
                  {category?.subCategories?.map((subCategory, index) => (
                    <li
                      key={`${category?.id}-${index}`}
                      className="cursor-pointer hover:text-orange-300"
                      onClick={() => setDrawerVisible(false)}
                    >
                      {subCategory?.name}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}

          <li 
            className="font-bold text-orange-500 mt-2 cursor-pointer" 
            onClick={() => { nav("/explorepage"); setDrawerVisible(false); }}
          >
            Explore more
          </li>

          {!isLoggedIn ? (
            <>
              <li 
                className="font-bold mt-2 cursor-pointer hover:text-orange-300" 
                onClick={() => { nav("/signup"); setDrawerVisible(false); }}
              >
                Sign Up
              </li>
              <li 
                className="font-bold mt-2 cursor-pointer hover:text-orange-300" 
                onClick={() => { nav("/login"); setDrawerVisible(false); }}
              >
                Login
              </li>
            </>
          ) : (
            <li 
              className="font-bold mt-2 cursor-pointer hover:text-orange-300" 
              onClick={() => { nav("/dashboard"); setDrawerVisible(false); }}
            >
              <div className="flex items-center gap-2">
                <FaUserCircle /> Dashboard
              </div>
            </li>
          )}
        </ul>
      </Drawer>
    </header>
  );
};

export default Header;

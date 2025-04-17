import React, { useState } from 'react';
import "./getVerified.css";
import { PiCameraBold } from "react-icons/pi";
import { toast, ToastContainer } from 'react-toastify';

const GetVerified = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    location: '',
    gender: '',
    jamb: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form); 
    if (value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };
  

  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        newErrors[key] = true;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      alert("Please fill in all necessary information");
      return;
    }

    console.log("Form submitted:", form);
    toast.success("Verification submitted successfully!");
  };
  const errorStyle = {
    border: "1px solid red",
  };

  const errorMsgStyle = {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "4px",
  };

  return (
    <div className='GetVerified'>
        <ToastContainer/>
      <div className='getverifiedbody'>
        <div className='getverifiedwrap'>
          <div className='upload'><PiCameraBold size={30} className='PiCameraBold'/></div>
          <h2 className='getv'>User Verification</h2>
          <h1 className='gev1'>Fill in the necessary information below</h1>
        </div>

        <div className='getverifiedwrapper'>
          <div className='getverifiedwrapperbody'>
            <div className='P1'>
              <p className='veryfy'>Name</p>
              <input
                className='input'
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                style={errors.name ? errorStyle : {}}
              />
            </div>
            <div className='p2'>
              <p className='veryfy1'>Phone number</p>
              <input
                className='inputz'
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                style={errors.phone ? errorStyle : {}}
              />
            </div>
          </div>

          <div className='getverifiedwrapperbody1'>
            <div className='P3'>
              <p className='veryfy3'>Whatsapp Link</p>
              <input
                className='inputw'
                type="text"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                style={errors.whatsapp ? errorStyle : {}}
              />
            </div>
            <div className='p4'>
              <p className='veryfy4'>School/Location</p>
              <input
                className='inpute'
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                style={errors.location ? errorStyle : {}}
              />
            </div>
          </div>

          <div className='getverifiedwrapperbody2'>
            <div className='p10'>
              <p className='very9'>Gender</p>
              <div className='last'>
                <div className='male'>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={form.gender === "male"}
                    onChange={handleChange}
                    style={{ accentColor: "purple" }}
                  />
                  <label>Male</label>
                </div>
                <div className='male'>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === "female"}
                    onChange={handleChange}
                    style={{ accentColor: "purple" }}
                  />
                  <label>Female</label>
                </div>
              </div>
              {errors.gender && <p style={errorMsgStyle}>Please select a gender</p>}
            </div>
            <div className='p11'>
              <p className='veryfy9'>Jamb registration number</p>
              <input
                className='inpuz'
                type="text"
                name="jamb"
                value={form.jamb}
                onChange={handleChange}
                style={errors.jamb ? errorStyle : {}}
              />
            </div>
          </div>

          <button className='btn10' onClick={handleSubmit}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetVerified;

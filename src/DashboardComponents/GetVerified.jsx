import React, { useRef, useState } from "react";
import "./GetVerified.css";
import { TbCapture } from "react-icons/tb";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaCamera } from "react-icons/fa";

const GetVerified = () => {
  const BASE_URL = "https://campustrade-kku1.onrender.com";
  const token = JSON.parse(localStorage.getItem("userData"))?.token;
  const userId = JSON.parse(localStorage.getItem("userData"))?.data?.id;

  const [errors, setErrors] = useState({});
  const [fullName, setFullName] = useState("");
  const [school, setSchool] = useState("");
  const [gender, setGender] = useState("");
  const [jambRegNo, setJambRegNo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappLink, setWhatsAppLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePicture] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [resetInput, setResetInput] = useState(false);
  const fileInputRef = useRef(null);


  const errorStyle = {
    border: "1px solid red",
  };

  const errorMsgStyle = {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "4px",
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Set profile picture file
      setProfilePicture(file);
      setImagePreview(URL.createObjectURL(file)); 
    } else {
      setProfilePicture(null);
      setImagePreview(null);
    }
  };

  console.log("Profile Picture:", profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {};
    if (!fullName) newErrors.name = true;
    if (!school) newErrors.location = true;
    if (!gender) newErrors.gender = true;
    if (!jambRegNo) newErrors.jamb = true;
    if (!phoneNumber) newErrors.phone = true;
    if (!whatsappLink) newErrors.whatsapp = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("fullName", fullName);
      formData.append("school", school);
      formData.append("gender", gender);
      formData.append("phoneNumber", phoneNumber);
      formData.append("jambRegNo", jambRegNo);
      formData.append("whatsappLink", whatsappLink);

      formData.append("profilePic", profilePic); // Append the image file

      await axios.patch(`${BASE_URL}/api/v1/kyc/profile/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Verification submitted successfully");
      setFullName("");
      setSchool("");
      setGender("");
      setJambRegNo("");
      setPhoneNumber("");
      setWhatsAppLink("");
      setProfilePicture(null);
      setErrors({});
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Something went wrong. Try again."
      );
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="GetVerified">
      <ToastContainer />
      <div className="getverifiedbody">
        <div className="getverifiedwrap">
          {/* <TbCapture size={85} /> */}
          <div className="downer">
            <label htmlFor="imageUpload">
              {/* <p> Add Photo</p> */}
              <div className="circle">
                {!imagePreview && <FaCamera className="cam" />}
                {imagePreview && <img src={imagePreview} alt="" />}
                <input
                  key={resetInput ? "reset" : "normal"}
                  ref={fileInputRef}
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="profilePic"
                  onChange={handleImageChange}
                />
              </div>
            </label>
          </div>
          <h2 className="getv">User Verification</h2>
          <h1 className="gev1">Fill in the necessary information below</h1>
        </div>

        <div className="getverifiedwrapper">
          <div className="getverifiedwrapperbody">
            <div className="P1">
              <p className="veryfy">Name</p>
              <input
                className="input"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={errors.name ? errorStyle : {}}
              />
            </div>
            <div className="p2">
              <p className="veryfy1">Phone number</p>
              <input
                className="inputz"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={errors.phone ? errorStyle : {}}
              />
            </div>
          </div>

          <div className="getverifiedwrapperbody1">
            <div className="P3">
              <p className="veryfy3">Whatsapp Link</p>
              <input
                className="inputw"
                type="text"
                value={whatsappLink}
                onChange={(e) => setWhatsAppLink(e.target.value)}
                style={errors.whatsapp ? errorStyle : {}}
              />
            </div>
            <div className="p4">
              <p className="veryfy4">School/Location</p>
              <input
                className="inpute"
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                style={errors.location ? errorStyle : {}}
              />
            </div>
          </div>

          <div className="getverifiedwrapperbody2">
            <div className="p10">
              <p className="very9">Gender</p>
              <div className="last">
                <div className="male">
                  {["Male", "Female"].map((type) => (
                    <label key={type}>
                      <input
                        type="radio"
                        name="gender"
                        value={type}
                        checked={gender === type}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              {errors.gender && (
                <p style={errorMsgStyle}>Please select a gender</p>
              )}
            </div>
            <div className="p11">
              <p className="veryfy9">Jamb registration number</p>
              <input
                className="inpuz"
                type="text"
                value={jambRegNo}
                onChange={(e) => setJambRegNo(e.target.value)}
                style={errors.jamb ? errorStyle : {}}
              />
            </div>
          </div>

          <button className="btn10" onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Done"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetVerified;

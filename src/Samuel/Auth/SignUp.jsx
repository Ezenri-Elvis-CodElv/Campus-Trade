import React, { cache, useState } from "react";
import "./auth.css";
import axios from "axios";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignUp = () => {
  const nav = useNavigate();
  const [showpassword, setShowpassword] = useState(false);
  const [showpassword2, setShowpassword2] = useState(false);
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const url = "https://campustrade-kku1.onrender.com/api/v1/seller/register";
  const googleAuthUrl =
    "https://campustrade-kku1.onrender.com/api/v1/seller/google-authenticate";

  const handlesGoogleAuth = async () => {
    try {
      const res = await axios.get(googleAuthUrl);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handlesubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(url, {
        email: auth.email,
        password: auth.password,
        confirmPassword: auth.confirmpassword,
      });
      if (res.status === 201) {
        console.log(res);
        nav("/login");
        toast.success("Welcome,Please check your email for verification");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setLoading(false);
    }
  };
  const isDisabled = !auth.email || !auth.password || !auth.confirmpassword;
  return (
    <div className="Overall withBackgroundImage">
      <div className="box">
        <div className="boxWrapper">
          <div className="authlogo">
            <img src="/images/CAMPUSTRADE-02 1.png" onClick={() => nav("/")} />
          </div>

          <div className="inputHolder">
            <h2 className="welcome">Welcome! We Are Glad To Have You Here</h2>
            <p className="signupText">Sign Up</p>
            <span className="infoText">Fill In Your Correct Information</span>

            <div className="inputBox">
              <label>Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Input Your Email"
                value={auth.email}
                onChange={(e) => setAuth({ ...auth, email: e.target.value })}
                className={errors.email ? "inputError" : ""}
              />
              {errors.email && (
                <span className="errorText">{errors.email}</span>
              )}

              <label>Password</label>
              <div className="passwordField">
                <input
                  type={showpassword ? "text" : "password"}
                  name="Password"
                  placeholder="Enter Your Password"
                  value={auth.password}
                  onChange={(e) =>
                    setAuth({ ...auth, password: e.target.value })
                  }
                  className={errors.password ? "inputError" : ""}
                />
                <span
                  className="eyeIcon"
                  onClick={() => setShowpassword((prev) => !prev)}
                >
                  {showpassword ? <FiEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              {errors.password && (
                <span className="errorText">{errors.password}</span>
              )}

              <label>Confirm Password</label>
              <div className="passwordField">
                <input
                  type={showpassword2 ? "text" : "password"}
                  name="Confirm Password"
                  placeholder="Enter Your Password"
                  value={auth.confirmpassword}
                  onChange={(e) =>
                    setAuth({ ...auth, confirmpassword: e.target.value })
                  }
                  className={errors.confirmpassword ? "inputError" : ""}
                />
                <span
                  className="eyeIcon"
                  onClick={() => setShowpassword2((prev) => !prev)}
                >
                  {showpassword2 ? <FiEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              {errors.confirmpassword && (
                <span className="errorText">{errors.confirmpassword}</span>
              )}

              <button
                className="submitBtn"
                onClick={handlesubmit}
                disabled={isDisabled || loading}
                style={{
                  opacity: isDisabled || loading ? 0.6 : 1,
                  cursor: isDisabled || loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? <div>Loading....</div> : <div>Sign Up</div>}
              </button>
              <div className="footer">
                <p
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    cursor: "default",
                    marginTop: "10px",
                  }}
                >
                  Already Have An Account?
                  <span
                    style={{
                      color: "purple",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                    onClick={() => nav("/login")}
                  >
                    Login
                  </span>
                </p>
              </div>
              {/* <button className="googleLogin" onClick={handlesGoogleAuth}>
                <FcGoogle className="icon" />
                <span>Sign up with Google</span>
              </button> */}

              <p className="trademark">@campustrade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

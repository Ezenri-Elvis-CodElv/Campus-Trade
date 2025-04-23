import React, { useState } from "react";
import "./auth.css";
import { FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const nav = useNavigate();
  const [showpassword, setShowpassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const url = "https://campustrade-kku1.onrender.com/api/v1/seller/login";
  const url1 = "https://campustrade-kku1.onrender.com/api/v1/seller/auth/google/login"
  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(url, {
        email: auth.email,
        password: auth.password,
      });
      console.log(res);
      if (res.status === 200) {
        nav("/dashboard");
        toast.success(res.data.message);
        localStorage.setItem("userData",JSON.stringify(res.data))
        localStorage.setItem("token",JSON.stringify(res?.data?.token))
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "Login failed.");
      setErrors({ message: err?.response?.data?.message });
      setLoading(false);
    }
  };
  const isDisabled = !auth.email || !auth.password;
  const handleGoogleLogin = async () => {
    window.location.href = `${url1}`
  }
  return (
    <div className="Overall">
      <div className="box">
        <div className="boxWrapper">
          <div className="authlogo">
            <img src="/images/CAMPUSTRADE-02 1.png" alt="" />
          </div>

          <div className="inputHolder">
            <h2 className="welcome">
              Welcome! We Are Glad To Have You Here
            </h2>
            <p className="signupText">Login</p>
            <div className="inputBox">
              <label>Email</label>
              <input
                type="email"
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

              <button
                className="submitBtn"
                onClick={handlesubmit}
                disabled={isDisabled}
                style={{
                  opacity: isDisabled ? 0.6 : 1,
                  cursor: isDisabled ? "not-allowed" : "pointer",
                }}
              >
                {loading ? <div>Loading....</div> : <div>Login</div>}
              </button>
              <div className="footer">
                <p
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    cursor: "default",
                    marginTop: "10px"
                  }}
                >
                  Already have an account?{" "}
                  <span
                    style={{
                      color: "purple",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                    onClick={() => nav("/signup")}
                  >
                    Sign Up
                  </span>
                </p>
                <p
                  style={{
                    color: "purple",
                    display: "flex",
                    cursor: "pointer",
                    marginTop: "10px"
                  }}
                  onClick={() => nav("/forgetpassword")}
                >
                  Forgot Password?
                </p>
              </div>
              {/* <button className="googleLogin"
              onClick={handleGoogleLogin}>
              {/* <button className="googleLogin">
                <FcGoogle className="icon" />
                <span>Sign in with Google</span>
              </button> */} 

              <p className="trademark">@campustrade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

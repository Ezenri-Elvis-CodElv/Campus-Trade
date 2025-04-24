import React, { useState } from "react";
import "./auth.css";
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const url = "https://campustrade-kku1.onrender.com/api/v1/seller/login";
  const googleLoginUrl =
    "https://campustrade-kku1.onrender.com/api/v1/seller/auth/google/login";

  const validateForm = () => {
    const newErrors = {};
    if (!auth.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(auth.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!auth.password) {
      newErrors.password = "Password is required.";
    } else if (auth.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await axios.post(url, {
        email: auth.email,
        password: auth.password,
      });

      if (res.status === 200) {
        localStorage.setItem("userData", JSON.stringify(res.data));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success(res.data.message);
        nav("/dashboard");
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Login failed.");
      setErrors({ message: err?.response?.data?.message });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = googleLoginUrl;
  };

  const isDisabled = !auth.email || !auth.password;

  return (
    <div className="Overall">
      <div className="box">
        <div className="boxWrapper">
          <div className="authlogo">
            <img
              src="/images/CAMPUSTRADE-02 1.png"
              alt="CampusTrade Logo"
              onClick={() => nav("/")}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="inputHolder">
            <h2 className="welcome">Welcome! We Are Glad To Have You Here</h2>
            <p className="signupText">Login</p>

            <form className="inputBox" onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Input Your Email"
                value={auth.email}
                onChange={(e) =>
                  setAuth({ ...auth, email: e.target.value })
                }
                className={errors.email ? "inputError" : ""}
              />
              {errors.email && (
                <span className="errorText">{errors.email}</span>
              )}

              <label>Password</label>
              <div className="passwordField">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  value={auth.password}
                  onChange={(e) =>
                    setAuth({ ...auth, password: e.target.value })
                  }
                  className={errors.password ? "inputError" : ""}
                />
                <span
                  className="eyeIcon"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FiEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              {errors.password && (
                <span className="errorText">{errors.password}</span>
              )}

              <button
                className="submitBtn"
                type="submit"
                disabled={isDisabled || loading}
                style={{
                  opacity: isDisabled || loading ? 0.6 : 1,
                  cursor:
                    isDisabled || loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Loading..." : "Login"}
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
                  Don't have an account?
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
                  className="forgot-password"
                  onClick={() => nav("/forgetpassword")}
                >
                  Forgot Password?
                </p>
              </div>

              {/* <button
                type="button"
                className="googleLogin"
                onClick={handleGoogleLogin}
              >
                <FcGoogle className="icon" />
                <span>Sign in with Google</span>
              </button> */}

              <p className="trademark">@campustrade</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Cookies from "js-cookie";
// import { auth, provider } from "../config/firebase";
// import { signInWithPopup } from "firebase/auth";
function ULogin() {
  const [captchaVal, setCaptchaVal] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (!captchaVal) {
        toast.error("Fill the Captcha");
      } else {
        await axios
          .post("http://localhost:8000/userlogin", {
            form,
          })
          .then((res) => {
            if (res.data == "loginPass") {
              Cookies.set("email", form.email, { expires: 7 });
              toast.success("login successful");
            } else if (res.data == "nouser") {
              toast.error("this email is not registered");
            } else if (res.data == "loginFail") {
              toast.error("Invalid Credentials");
            } else if (res.data == "fail") {
              toast.error("Something went wrong!");
            }
          })
          .catch((e) => {
            toast.error("Something went wrong!");
          });
      }
    } catch (e) {
      toast.error("Something went wrong!");
    }
  };
//   const handleClick = () => {
//     signInWithPopup(auth, provider).then((data) => {
//       Cookies.set("email", data.user.email, { expires: 7 });
//     });
//   };
  return (
    <div className="mb-6">
      <form action="POST" method="/userlogin" onSubmit={submit}>
        <section class="text-gray-600 body-font relative grid place-items-center mt-10">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font text-center">
              Login
            </h2>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                value={form.name}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  });
                }}
                required
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                value={form.name}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  });
                }}
                required
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <ReCAPTCHA
              sitekey="6LeLRiopAAAAAB-klcQqCPRkm7jRL1lgdZQNvoWO"
              onChange={(value) => {
                setCaptchaVal(value);
              }}
            />
            <input
              className="mt-3 cursor-pointer text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
              value={"login"}
            />
            <p className="text-base text-blue-700 mt-3 text-center">
              <Link to={"/userforgotpassword"}>Forgot Password</Link>
            </p>
            <div className="flex justify-center items-center space-x-4">
              {/* Google Login Button */}
              <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200">
                <img className="w-5 h-5" src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" />
              </button>

              {/* Facebook Login Button */}
              <button className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200">
                <img className="w-5 h-5" src="https://www.svgrepo.com/show/157806/facebook.svg" alt="Facebook logo" />
              </button>
            </div>
            <p className="text-base mt-3 text-center">don't have an Account?</p>
            <p className="text-base text-blue-700 mt-3 text-center">
              <Link to={"/userRegister"}>Register</Link>
            </p>
          </div>
        </section>
      </form>
    </div>
  );
}

export default ULogin;
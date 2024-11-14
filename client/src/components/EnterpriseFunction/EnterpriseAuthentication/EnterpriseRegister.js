import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

function EnterpriseRegister() {
  const [captchaVal, setCaptchaVal] = useState(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    company: "",
  });
  console.log(form)

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (form.password.length < 6) {
        toast.error("Password must be at least 6 characters");
      } else if (form.password != form.cpassword) {
        toast.error("Password did not matched");
      } else if (!captchaVal) {
        toast.error("Fill the captcha");
      } else {
        await axios
          .post("http://localhost:8000/enterpriseregister", {
            form,
          })
          .then((res) => {
            if (res.data == "exists") {
              toast.error("Email already exists");
            } else if (res.data == "notexist") {
              Cookies.set("email", form.email, { expires: 7 });
              toast.success("successfully registered");
            }
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={submit}>
        <section className="text-gray-600 body-font relative grid place-items-center mt-10">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Register
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                required
                value={form.email}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                required
                value={form.password}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">
                Confirm Password
              </label>
              <input
                required
                value={form.cpassword}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="password"
                id="cpassword"
                name="cpassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                Phone Number
              </label>
              <input
                required
                value={form.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Loại bỏ các ký tự không phải số
                  setForm({
                    ...form,
                    [e.target.name]: value,
                  });
                }}
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]*"
                inputMode="numeric"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="company" className="leading-7 text-sm text-gray-600">
                Company name
              </label>
              <input
                required
                value={form.company}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="text"
                id="company"
                name="company"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <ReCAPTCHA
              sitekey="6LeLRiopAAAAAB-klcQqCPRkm7jRL1lgdZQNvoWO"
              onChange={(value) => {
                setCaptchaVal(value);
              }}
            />
            <input
              className="cursor-pointer mt-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
              value="Submit"
            />
            <p className="text-base mt-3">Already have an Account?</p>
            <p className="text-base text-blue-700 mt-3">
              <Link to="/enterpriselogin">Login</Link>
            </p>
          </div>
        </section>
      </form>
    </div>
  );
}

export default EnterpriseRegister;

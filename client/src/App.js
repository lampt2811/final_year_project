import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header"; // Import component Header mới

// Import các component của User và Enterprise
import UserLogin from "./components/UserFunction/UserAuthentication/UserLogin";
import UserRegister from "./components/UserFunction/UserAuthentication/UserRegister";
import UserForgotPassword from "./components/UserFunction/UserAuthentication/UserForgotPassword";
import UserResetPassword from "./components/UserFunction/UserAuthentication/UserResetPassword";
import EnterpriseForgotPassword from "./components/EnterpriseFunction/EnterpriseAuthentication/EnterpriseForgotPassword";
import EnterpriseResetPassword from "./components/EnterpriseFunction/EnterpriseAuthentication/EnterpriseResetPassword";
import EnterpriseLogin from "./components/EnterpriseFunction/EnterpriseAuthentication/EnterpriseLogin";
import EnterpriseRegister from "./components/EnterpriseFunction/EnterpriseAuthentication/EnterpriseRegister";
import UserHomePage from "./components/UserFunction/UserHomePage";
import EnterpriseHomePage from "./components/EnterpriseFunction/EnterpriseHomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />

        {/* Sử dụng component Header ở đây */}
        <Header />

        <Routes>
          {/* Đường dẫn cho User */}
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/userforgotpassword" element={<UserForgotPassword />} />
          <Route path="/userresetpassword" element={<UserResetPassword />} />
          <Route path="/userhomepage" element={<UserHomePage />} />

          {/* Đường dẫn cho Enterprise */}
          <Route path="/enterpriseforgotpassword" element={<EnterpriseForgotPassword />} />
          <Route path="/enterpriseresetpassword" element={<EnterpriseResetPassword />} />
          <Route path="/enterpriselogin" element={<EnterpriseLogin />} />
          <Route path="/enterpriseregister" element={<EnterpriseRegister />} />
          <Route path="/enterprisehomepage" element={<EnterpriseHomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// Header.js
import React from "react";
import { useLocation } from "react-router-dom";
import Header1 from "../components/UserFunction/layout/Header1";
import Header2 from "../components/EnterpriseFunction/layout/Header2";

function Header() {
  const location = useLocation();

  // Xác định header dựa trên đường dẫn
  const isUserRoute = location.pathname.startsWith("/user");
  const isEnterpriseRoute = location.pathname.startsWith("/enterprise");

  return (
    <>
      {isUserRoute && <Header1 />}
      {isEnterpriseRoute && <Header2 />}
    </>
  );
}

export default Header;

import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigation = useNavigate();
  const getData = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
    navigation("/login");
  };

  return (
    <header>
      <nav>
        {getData ? (
          <ul className="nav-links">
            <li>
              <Link to={"/"}>Products</Link>
            </li>
            <li>
              <Link to={"/add"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/update"}>Update Product</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/login"} onClick={logout}>
                Logout
              </Link>
            </li>
            <li>Hello {JSON.parse(getData).username}</li>
          </ul>
        ) : (
          <ul className="ul-right">
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

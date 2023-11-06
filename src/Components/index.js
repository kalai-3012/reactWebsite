import React, { useState, useContext } from "react";
import image4 from "./logo copy.png";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useTranslation } from "react-i18next";
import { Dropdown } from 'primereact/dropdown';

const Navbar = (props) => {
  // const [t,i18n] = useTranslation("global")
  // const handleChangeLanguage = (lang) => {
  //   i18n.changeLanguage(lang, (err) => {
  //     if (err) {
  //       console.error('Error changing language:', err);
  //     }
  //   });
  // };
  
  return (
    <>
      <Nav style={{background:'rgb(226, 216, 216)'}}>
        {/* <h1>{t("header.message")}</h1> */}
        {/* <button onClick={()=>handleChangeLanguage("en")}>EN</button>
        <button onClick={()=>handleChangeLanguage("es")}>ES</button> */}
        <NavMenu>
          <NavLink className="navbar-brand fw-bold fs-4 px-2" to="#">
            <img
              className="card-img img-fluid"
              src={image4}
              alt="Card"
              height={"100"}
              style={{ width: "90px" }}
            />
          </NavLink>
          <NavLink to="/about" activeStyle>
            Home
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Cyber Bits Security
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            About us
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Contact Us
          </NavLink>

          {/* <ShoppingCartOutlinedIcon
            style={{ marginTop: 1, marginLeft: "10rem", cursor: "pointer" }}
          /> */}
          <a href="/Main">
            <ShoppingCartOutlinedIcon
              style={{ marginTop: 1, marginLeft: "10rem", cursor: "pointer" }}
            />
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ""
            )}
          </a>

          <NavLink
            to="./login"
            className=""
            style={{ borderRadius: "6px", textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              style={{ marginTop: 1, marginLeft: "1rem" }}
            >
              My Account
            </Button>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

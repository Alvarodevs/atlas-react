import React from "react";
import { Link } from "react-router-dom";
//STYLES
import { NavLink, NavContainer, LinksContainer } from "./NavbarStyled";
import logoNav from "../../assets/icons/logo-nav.svg";

const Navbar = () => {
   return (
      <>
         <NavContainer>
            <LinksContainer>
               <div>
                  <Link to="/portfolio">
                     <NavLink>Portfolio</NavLink>
                  </Link>
                  <Link to="/services">
                     <NavLink>Services</NavLink>
                  </Link>
               </div>
               <Link to="/">
                  <img src={logoNav} alt="logo" />
               </Link>
               <div>
                  <Link to="/about_us">
                     <NavLink>About</NavLink>
                  </Link>
                  <Link to="/contact">
                     <NavLink>Contact</NavLink>
                  </Link>
               </div>
            </LinksContainer>
         </NavContainer>
      </>
   );
};

export default Navbar;

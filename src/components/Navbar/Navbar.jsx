import React from "react";
import { Link } from "react-router-dom";
//STYLES
import { NavLink, NavContainer, LinksContainer } from "./NavbarStyled";
import logoAtlas from "../../assets/icons/logoAtlas.svg";

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
               <img src={logoAtlas} alt="logo" />
               <div>
                  <Link to="/about_us">
                     <NavLink>About</NavLink>
                  </Link>
                  <Link to="/contact">
                     <NavLink>contact</NavLink>
                  </Link>
               </div>
            </LinksContainer>
         </NavContainer>
      </>
   );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
//STYLES
import {
   FooterContainer,
   LogoContainer,
   Logo,
   FooterLinks,
   Column,
   Title,
   BottomText
} from "./FooterStyled";
//IMAGES
import logo from "../../assets/icons/logo-footer.svg";

const Footer = () => {
   return (
      <>
         <FooterContainer>
            <LogoContainer>
               <Logo src={logo} alt="logo" />
            </LogoContainer>

            <FooterLinks>
               <Column>
                  <Title>About</Title>
                  <p>manifesto</p>
                  <p>methodology</p>
                  <p>team</p>
                  <p>jobs</p>
                  <p>client area</p>
               </Column>
               <Column>
                  <Title>Services</Title>
                  <p>strategy & planning</p>
                  <p>creativity & design</p>
                  <p>digital marketing</p>
                  <p>European & multilateral</p>
                  <p>programs</p>
               </Column>
               <Column>
                  <Title>Social</Title>
                  <p>linkedin</p>
                  <p>twitter</p>
                  <p>instagram</p>
                  <p>facebook</p>
                  <p>blog</p>
               </Column>
               <Column>
                  <Title>Portfolio</Title>
                  <Link to="/contact">
                     <p>Contact</p>
                  </Link>
               </Column>
            </FooterLinks>
            <BottomText>
            For general inquiries please send an email to{" "}
            <a href="mailto:hola@atlasmarketingstudio.com">
               <strong>hola@atlasmarketingstudio.com</strong>
            </a>
         </BottomText>
         </FooterContainer>
         
      </>
   );
};

export default Footer;

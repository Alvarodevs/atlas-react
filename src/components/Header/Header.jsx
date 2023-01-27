import React from "react";
//styles
import { Container, Background, Text } from "./HeaderStyled";
import eye from "../../assets/images/eye.jpg";

const Header = () => {
   return (
      <Container>
         <Background src={eye} alt="header image" />
         <Text>
            <p>A powerhouse of singular talent that provides</p>
            <p>
               boundless opportunities of <span>international</span>
            </p>
            <p>
               growth and <span>digital</span> experience
            </p>
         </Text>
      </Container>
   );
};

export default Header;

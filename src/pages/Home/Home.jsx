import React from "react";
import {HomeContainer} from "./HomeStyled";

import { Text } from "../../components/Header/HeaderStyled";
//components
import Header from "../../components/Header";
import OurWork from "../../components/OurWork";
import OurJourney from "../../components/OurJourney";

const Home = () => {
   return (
      <HomeContainer>
         <Header />
         <OurWork />
            <p>
               <span>Women-owned</span> and independently held,
            </p>
            <p>Atlas has evolved into a thriving studio</p>
            <p>
               of <span>international professionals.</span>
            </p>
            <OurJourney/>
      </HomeContainer>
   );
};

export default Home;

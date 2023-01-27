import React from 'react';
import {JourneyContainer} from "./OurJourneyStyled";

import { Title } from '../OurWork/OurWorkStyled';
import { Background } from '../Header/HeaderStyled';
import journey from "../../assets/images/journey.png";

 
const OurJourney = () => {
 
    return (
       <JourneyContainer>
       <Title>Our Journey</Title>
        <Background src={journey} alt='journey'/> 
      </JourneyContainer>
    )
}
 
export default OurJourney;
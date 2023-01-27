import React from "react";
//styles
import { Title, ProjectsContainer, PortfolioBtn, ButtonContainer } from "./OurWorkStyled";
import ProjectCard from "../ProjectCard";

import basemill from "../../assets/images/basemill.png";
import jewelry from "../../assets/images/jewelry.png";
import lucsso from "../../assets/images/lucsso.png";
import lamb from "../../assets/images/lamb.png";
import poultry from "../../assets/images/poultry.png";
import womenclm from "../../assets/images/womenclm.png";


const OurWork = () => {
   return (
      <>
         <Title>Our Work</Title>
         <ProjectsContainer>
            <ProjectCard
               name="BASE MILL"
               title="An authentically pure vegetable drink"
               src={basemill}
               width={100}
               desc="An authentically pure vegetable drink 14% almond. Up to 7 times more than other brands"
            />
            <ProjectCard
               name="EU POULTRY"
               title="Your smart choice"
               src={poultry}
               width={100}
               desc="Your smart choice
               Raising awareness on the sustainability of the European poultry sector"
            />
            <ProjectCard
               name="Cordoba Jewelry"
               title=""
               src={jewelry}
               width={100}
               desc="A protected geographical indication
               that recognizes the know-how of the jewelry sector"
            />
            <ProjectCard
               name="LUCSSO"
               title="A jewelry brand that challenges the rules of the category"

               src={lucsso}
               width={100}
               desc="A jewelry brand to challenge the rules of the category
               Rebranding, digital strategy and product design"
            />
            <ProjectCard
               name="WOMEN CASTILLA-LA MANCHA"
               title="Competitive women and female opportunities"
               src={womenclm}
               width={100}
               desc="Competitive women and female opportunities
               A female association creating opportunities for women"
            />
            <ProjectCard
               name="SPANISH LAMB UAE & ASIA"
               title="An omnichannel strtegy to promote Spanish Lamb and sheep meat"
               src={lamb}
               width={100}
               desc="A 2-year omnichannel strategy to promote Spanish lamb and sheep meat
               Increasing product awareness among consumers in the Middle East"
            />
         </ProjectsContainer>
         <ButtonContainer>
            <PortfolioBtn>See Portfolio</PortfolioBtn>
         </ButtonContainer>
      </>
   );
};

export default OurWork;

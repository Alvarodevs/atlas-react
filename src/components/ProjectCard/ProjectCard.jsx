import React from 'react';
import {Name, Title, Img, Description} from './ProjectCardStyled'
 
const ProjectCard = ({name, title, src, width, desc}) => {
 console.log(name, title, src, width, desc);
    return (
      <Img src={src} width={width}>
         <Name>{name}</Name>
         <Title>{title}</Title>
         <Description>{desc}</Description>
      </Img>
    )
}
 
export default ProjectCard;
import styled from "styled-components";

export const Title = styled.h3`
   width: 50%;
   color: var(--color-beige);
   font-size: 3rem;
   padding: 0 4rem 3rem 4rem;
   font-weight: 900;
`;

export const ProjectsContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
width: 100%;
display:grid;
`; 

export const PortfolioBtn = styled.button`
   font-size: 2rem;
   margin: auto;
   border: 3px solid var(--color-black);
   border-radius: 50px;
   padding: 20px 40px;
   cursor: pointer;
   margin-bottom: 10rem;
`;

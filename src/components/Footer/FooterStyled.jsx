import styled from "styled-components";

export const FooterContainer = styled.footer`
   width: 100%;
   height: 15rem;
   padding: 1rem;
   background-color: #000;
   color: var(--color-black);
   display: grid;
   grid-template-columns: 1fr 2fr;
   position:relative;
   margin-top: 1rem;

`;

export const LogoContainer = styled.div`
   width: 18rem;
   margin-left: 3rem;
`;

export const Logo = styled.img`
   width: 100%;
   margin: auto;
   padding: 1rem;
`;

export const FooterLinks = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-gap: 10px;
`;

export const Column = styled.div`
   display: flex;
   flex-direction: column;
   p {
      color: var(--color-white);
      padding: 0.2rem 0;
      transition: all 0.3s ease-in-out;
      &:hover {
         color: var(--color-grey);
      }
   }
`;

export const Title = styled.h3`
   color: var(--color-white);
   padding-bottom: 0.5rem;
   transition: all 0.3s ease-in-out;
   &:hover {
      color: var(--color-grey);
   }
`;

export const BottomText = styled.p`
   position: absolute;
   bottom: 0;
   right: 5rem;
   padding: 1rem 0;
   color: var(--color-white);
   font-weight: 300;
`;

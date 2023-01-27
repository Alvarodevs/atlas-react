import styled from "styled-components";

export const NavContainer = styled.nav`
   width: 100%;
   background-color: black;
   padding: 0.5rem 0.5rem 0 0.5rem;
   position: fixed;
   top: 0;
   z-index: 1;
`;

export const LinksContainer = styled.ul`
   display: flex;
   justify-content: space-around;
   width: 100%;
   img {
      max-width: 40px;
   }
   div {
      display: flex;
   }
   
`;

export const NavLink = styled.li`
   color: white;
   text-decoration: none;
   font-size: 1rem;
   list-style: none;
   padding: 1rem 2rem;
   text-align: center;
   transition: 0.1s ease-in;
      &:hover {
      border-bottom: 1px solid white;
      
   }
`;
import styled from "styled-components";

export const Img = styled.div`
   width: ${({ width }) => `${width}%`};
   height: 650px;
   background-image: url(${({ src }) => src});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   transition: 1s;
   position: relative;

   &:hover {
      h5,
      h3 {
         transition: 8s ease-in-out;
         display: none;
      }
      filter: brightness(40%);
      p {
         display: block;
         text-align: end;
      }
   }
`;

export const Name = styled.h5`
   color: var(--color-white);
   font-size: 1rem;
   padding: 20px;
   &:hover{
      //transition: 3s ease-in-out;
   }
`;
export const Title = styled.h3`
   color: var(--color-white);
   font-size: 1.5rem;
   
   padding: 0 20px;
`;

export const Description = styled.p`
   width: 100%;
   color: var(--color-white)!important;
   transition: 3s;
   display: none;
   text-align: end;
   position: absolute;
   bottom: 1rem;
   padding: 0 10px 0 30%;
   filter: brightness(100%);
      &:hover {
      display: block;
      
   }
`;

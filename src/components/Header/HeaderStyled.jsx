import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   margin-bottom: 15rem;
   p {
      font-size: 3rem;
      color: var(--color-white);
      text-align: center;
   }

   span {
      border: 1px solid var(--color-white);
      border-radius: 50px;
      color: var(--color-red);  
      padding: 5px 10px;          
   }
`;

export const Text = styled.div`
   margin-top: -20rem;
`;
export const Background = styled.img`
   width: 100%;
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
`;
import styled from "styled-components";

export const PortfolioContainer = styled.main`
    width: 100vw;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    padding: 1.2rem;
    
      @media (min-width: 1440px) {
        align-items: center;
        justify-content: space-between;
      }
    

`
export const Profile = styled.section`
    width: 100%;
    height: auto; 
    display: flex; 
    flex-direction: column;
    margin-top: 3rem; 

    h1{  
        text-align: left;
        font-size: 2rem;
        font-weight: 500;

        span { 
            color:  ${(props) => props.theme['golden-brown']}; 
            font-style: italic;
            font-weight: bold;

        }
       

    }
    h2{
      font-size: 1.5rem;
        font-weight: 500;
      span { 
            color:  ${(props) => props.theme['golden-brown']}; 
            font-style: italic;
            font-weight: bold;
        }               
    }
    
      @media (min-width: 1440px) {
        width: 38.688rem;
        height: 49.75rem; 
        margin-left: 5.125rem;
        margin-top: 8.938rem; 
        gap: 34.188rem;
        padding-bottom: 4.75rem;
        h1{
              width: 35.75rem; 
              font-size: 2.5rem;
        }

      }
`
export const Projects = styled.section`
    width: 100%;
    border-radius: 24px; 
    background-color: ${(props) => props.theme['turkey-red']};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

     @media (min-width: 1440px) {
        width: 60rem;
     }
`
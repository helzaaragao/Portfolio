import styled from "styled-components";

export const PortfolioContainer = styled.main`
    width: 100vw;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    padding: 1.2rem;
    position: fixed;
    height: 100vh;
    overflow: hidden;
   
    

      @media (min-width: 1024px) {
        flex-direction: row;
       
        
      }
    
      @media (min-width: 1440px) {
        align-items: center;
        justify-content: space-between;
      }
    

`
export const Profile = styled.section`
    width: 100%;
    display: flex; 
    flex-direction: column;
    margin-top: 3rem; 

    flex-shrink: 0;

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
    @media (min-width: 1024px) {
         width: 40%;
         height: auto;
    }
    
      @media (min-width: 1440px) {
        width: 35%;
        max-width: 38.688rem;
        /* width: 38.688rem; */
        height: 49.75rem; 
        margin-left: 5.125rem;
        margin-top: 8.938rem; 
        /* gap: 34.188rem; */
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
    /* flex: 1; */
    overflow-y: auto;
    /* scroll-snap-type: y proximity; */
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
     &::-webkit-scrollbar {
    display: none; 
  }
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  will-change: transform;

   @media (min-width: 1024px){
       width: 60%;
       margin-top: 0;
       max-height: calc(100vh - 36.063rem);
       position: relative; 
       
       
     }
 

     @media (min-width: 1440px) {
        width: 60rem;
     }
`
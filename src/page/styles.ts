import styled from "styled-components";

export const PortfolioContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1.2rem;
  overflow: hidden;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`
export const Profile = styled.section`
  width: 100%;
  display: flex; 
  flex-direction: column;
  margin-top: 3rem; 
  flex-shrink: 0;

  div:first-child{
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
  }
 
    @media (min-width: 1024px) {
      width: 40%;
      height: auto;
      justify-content: space-between;
    }
    
    @media (min-width: 1440px) {
      padding: 2rem;
    
      h1{
        width: 35.75rem; 
        font-size: 2.5rem;
      }

    }
`
export const Projects = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 24px; 
  background-color: ${(props) => props.theme['turkey-red']};
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; 
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; 
     &::-webkit-scrollbar {
      display: none; 
    }

   @media (min-width: 1024px){
      width: 60%;
    }

    @media (min-width: 1440px) {
      margin: 1rem;
    }
`
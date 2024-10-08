import styled from "styled-components";

export const PortfolioContainer = styled.main`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

`
export const Profile = styled.section`
    width: 38.688rem;
    height: 49.75rem; 
    display: flex; 
    flex-direction: column;
    gap: 34.188rem;
    margin-left: 5.125rem;
    margin-right: 2.625rem; 
    margin-top: 8.938rem; 
    padding-bottom: 4.75rem;

    h1{ 
        width: 35.75rem; 
        text-align: left;
        font-size: 2.5rem;
        font-weight: 500;

        span { 
            color:  ${(props) => props.theme['golden-brown']}; 
            font-style: italic;
        }

        span:first-child {
            font-weight: bold;
        }
       

    }
`
export const Projects = styled.section`
    width: 60rem;
    margin-top: 3rem;
    margin-right: 1.3rem; 
    border-radius: 10px; 
    background-color: ${(props) => props.theme['turkey-red']};
`
import styled from "styled-components";

export const CardBackground = styled.div`
    width: 87.46%;
    margin-top: 2rem;
    height: 100%;
  
`

export const CardContainer = styled.main`
    width: 100%; 
    max-height: auto ; 
    background-color:  ${(props) => props.theme['white-smoke']};
    padding: 1.5rem;
    border-radius: 1.813rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    
    
    overflow: hidden;
    gap: 1rem;

    &:first-child{
        margin-top: 0.5rem;
    }
    /* &:last-child{
        margin-bottom: 4rem;
    } */

     @media (min-width: 1024px){
       
        
        
     }
    
     @media (min-width: 1440px) {
        
     }
`
export const CardImage = styled.section`
    
    img {
        width: 100%;
        border-radius: 10px;
    }
`
export const CardTexts = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div:first-child{
        h3{
            font-size: 1.5rem;
            color: ${(props) => props.theme['golden-brown']};
            margin-bottom: 0.2rem;
        }   
        div{
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
        }
        i{
            color: ${(props) => props.theme['golden-brown']};
        }
    }
   
    div:nth-child(2){
        display: flex;
        gap: 1rem;

       button {
        background-color: ${(props) => props.theme['black-brean']};
        width: 8.125rem;
        height: 2.688rem;
        border-radius: 3px;
        border: none;
       
        
        a{
            color: ${(props) => props.theme['white-smoke']};
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
       } 
    }
`
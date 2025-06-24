import styled from "styled-components";

export const CardBackground = styled.div`
    width: 87.46%;
    height: 100%;
    margin-top: 2rem;
`

export const CardContainer = styled.main`
    width: 100%; 
    max-height: auto; 
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 1.813rem;
    margin-bottom: 2rem;
    overflow: hidden;
    background-color:  ${(props) => props.theme['white-smoke']};

    &:first-child{
        margin-top: 0.5rem;
    }
    
    @media (min-width: 1440px) {
        &:first-child{
            margin-top: 1rem;
        }
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
            margin-bottom: 0.2rem;
            color: ${(props) => props.theme['golden-brown']};
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
            width: 8.125rem;
            height: 2.688rem;
            border-radius: 3px;
            border: none;
            background-color: ${(props) => props.theme['black-brean']};
            
            a{
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                gap: 0.5rem;
                color: ${(props) => props.theme['white-smoke']};
                &:focus{
                    box-shadow: none;
                }
            }
        } 
    }
`
import * as Accordion from '@radix-ui/react-accordion'
import styled from "styled-components";

export const HeaderRoot = styled(Accordion.Root)`
    position: relative;     
    width: 100%;
`
export const Item = styled(Accordion.Item)`
     position: relative;
     width: 100%;
     margin-top: 2rem;
`

export const Content = styled(Accordion.Content)`
        max-height: 0;          
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 3rem;
         background-color: ${(props) => props.theme['black-brean']};
         color: ${(props) => props.theme['white-smoke']};

         div:first-child{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          span{
            font-size: 0.75rem;
            text-transform: uppercase;

            display: flex;
            align-items: center;
          }
          h3{
            font-size: 1.5rem;
          }
          p{
            font-size: 0.875rem;
          }
         }

         div:last-child{
        
          a{
            color: ${(props) => props.theme['white-smoke']};
            text-decoration: none;
              h3{
            display: flex;
            align-items: center;
          } 
          p{
             font-size: 0.875rem;
          }
          }
  
         }

        &[data-state='open'] {
        max-height: 31.25rem;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        padding: 2.5rem;
        /* transition: max-height 0.4s ease-out; */
        animation: slideUp 400ms cubic-bezier(0.32, 0.72, 0.1), fadeIn 300ms ease-out;

        
        /* position: absolute;
        bottom: 100%; */
       
  }
      &[data-state='closed'] {
        animation: slideUp 300ms ease-in-out cubic-bezier(0.32, 0.72, 0.1),  fadeOut 200ms ease-in;
;
      }

      @keyframes slideUp {
        from {
          max-height: 0;
          transform: translateY(20px);
        } to {
          max-height: 100%;
          transform: translateY(0);
        }
      }
      @keyframes slideDown {
        from {
          max-height: 100%;
          transform: translateY(0);
        } to {
          max-height: 0;
          transform: translateY(20px);
        }
      }
`

export const HeaderAcc = styled(Accordion.Header)`
    width: 100%; 
    height: 6.8125rem; 
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem; 
    border-radius: 10px;
    margin-top: 2rem;
    font-size: 1.5rem;

    background-color: ${(props) => props.theme['black-brean']};
    color: ${(props) => props.theme['timberwolf']};
       &[data-state='open'] {
        border-radius: 0;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-top: 0;
       }
      @media (min-width: 1440px) {
        width: 38.6875rem; 
        height: 6.8125rem; 
      }
`

export const Trigger = styled(Accordion.Trigger)`
     cursor: pointer;
     width:6.9375rem; 
     height: 2.6875rem;
     background-color: ${(props) => props.theme['turkey-red']};
     color: ${(props) => props.theme['timberwolf']};
     border: transparent;
     border-radius: 25px; 
     box-shadow: none;
`

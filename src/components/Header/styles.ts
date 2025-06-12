import * as Accordion from '@radix-ui/react-accordion'
import styled from "styled-components";

export const HeaderRoot = styled(Accordion.Root)`
    position: relative;     
`
export const Item = styled(Accordion.Item)`
     position: relative;
`

export const Content = styled(Accordion.Content)`
        max-height: 0;
        &[data-state='open'] {
        max-height: 200px;
        transition: max-height 0.3s ease-out;
        overflow: hidden;
        position: absolute;
        bottom: 100%;
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

import * as Accordion from '@radix-ui/react-accordion'
import styled from "styled-components";

export const HeaderRoot = styled(Accordion.Root)`
  width: 100%;    
`
export const Item = styled(Accordion.Item)`
  margin-top: 2rem;
`

export const Content = styled(Accordion.Content)`         
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${(props) => props.theme['black-brean']};
  color: ${(props) => props.theme['white-smoke']};
  overflow: hidden;

    main:first-child{
      display: flex;
      flex-direction: column;
      gap: 4rem;

      div:first-child{
        cursor: pointer;

        span{
          display: flex;
          align-items: center;
          font-size: 0.75rem;
          margin-bottom: 0.6rem;
          text-transform: uppercase;
        }
        h3{
          font-size: 1.4rem;
        }
        p{
          margin-top: 0.5rem;
          font-size: 0.875rem;
        }
      }
      div:last-child{
        a{
          color: ${(props) => props.theme['white-smoke']};
          text-decoration: none;
          h3{
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            margin-bottom: 0.3rem;
          } 
          p{
             font-size: 0.875rem;
          }
        }
      }
    }
      

    &[data-state='open'] {
      max-height: 33rem;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding: 2.5rem;
      transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s ease, border-radius 0.4s ease;
    }
    &[data-state='closed'] {
      max-height: 0;
      transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, padding 0.4s ease, border-radius 0.3s ease;
    }
`

export const FormContainer = styled.div`
  aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;
      a{
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 0.75rem;
      }
      span{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.85rem;
        gap: 0.5rem;
        letter-spacing: 1px;
      }
      p{
        font-size: 0.875rem;
      }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    div{
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-size: 0.9rem;
      }
      input{
        height: 2rem;
      }
      textarea{
        height: 8.063rem;
      }
      input, textarea{
        border-radius: 2px;
        padding: 0.5rem;
        background-color: ${(props) => props.theme['black-brean']};
        border: 1px solid  ${(props) => props.theme['timberwolf']};
        color: ${(props) => props.theme['white-smoke']};
      }
     
    }
    button{
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
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
`

export const Trigger = styled(Accordion.Trigger)`
     cursor: pointer;
     width: 6.9375rem; 
     height: 2.6875rem;
     border-radius: 25px; 
     border: transparent;
     box-shadow: none;
     font-weight: bold;
     background-color: ${(props) => props.theme['turkey-red']};
     color: ${(props) => props.theme['timberwolf']};
`

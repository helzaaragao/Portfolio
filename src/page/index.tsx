import React from "react";
import { PortfolioContainer, Profile, Projects } from "./styles";
import { Header } from "../components/Header";
import { Card } from "../components/Cards";


export function Portfolio(){ 
    return(
        <PortfolioContainer>
            
            <Profile>
                <h1>Olá! Eu sou a <span>Helza</span><br/>
                Atualmente focada em <span>ReactJS</span></h1>
          
               <Header></Header>    
            </Profile>
       
            <Projects>
            <Card></Card>
            </Projects>
        </PortfolioContainer>
    )
}
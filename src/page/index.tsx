import React from "react";
import { PortfolioContainer, Profile, Projects } from "./styles";
import { Header } from "../components/Header";
import { Card } from "../components/Cards";


export function Portfolio(){ 
    return(
        <PortfolioContainer>
            
            <Profile>
                <h1>Olá! Eu sou a <span>Helza.</span></h1>
                <h2>Transformo ideias em código usando <span>React.js e TypeScript.</span></h2>
               <Header></Header>    
            </Profile>
       
            <Projects>
             <Card></Card>
            </Projects>
        </PortfolioContainer>
    )
}
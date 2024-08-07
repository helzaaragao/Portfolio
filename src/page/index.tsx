import React from "react";
import { PortfolioContainer, Profile, Projects } from "./styles";
import { Header } from "../components/Header";
import { Cards } from "../components/Cards";

export function Portfolio(){ 
    return(
        <PortfolioContainer>
            
            <Profile>
                <h1>Olá! Eu sou a Helza. <br />
                Atualmente focada em ReactJS.</h1>

                <Header>
                    {/* Contato, ainda resolvendo qual logica usar */}
                </Header>
                
            </Profile>
       
            <Projects>
            <Cards></Cards>
            </Projects>
        </PortfolioContainer>
    )
}
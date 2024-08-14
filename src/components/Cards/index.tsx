import React from "react";
import { CardContainer, CardDescription, CardImage } from "./styles";

export function Card() { 
    return(
        <CardContainer>
            <CardImage>
                <img src="" alt="" />
            </CardImage>
            <CardDescription>
                <h3>Teste</h3>
                <p>teste1</p>
                <p>teste2</p>
                <button><a href="/">Website</a></button>
                <button><a href="/">Github</a></button>
            </CardDescription>
        </CardContainer>
    )
}
import React from "react";
import { CardBackground, CardContainer, CardImage, CardTexts } from "./styles";
import { useQuery } from "@tanstack/react-query";

export interface Project {
    id: number,
    image: `${string}.${'png'}`,
    title: string,
    description: string,
    features: Array<`${string} ${string} ${string}`>, 
    technologies: string, 
    deploy_url: `https://${string}`,
    github_url: `https://github.com/${string}/${string}`;
}

const fetchProjects = async (): Promise<Project[]> => {
    const response = await fetch('../../projects.json')
    if(!response.ok){
        throw new Error('A resposta da rede não foi bem-sucedida')
    }
    return response.json()
}

export function Card() { 
    const {data, isLoading, error} = useQuery<Project[], Error>({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    })
    if (isLoading) return <div>Carregando...</div>
    if(error) return <div>Erro: {error.message}</div>
    if(!data || data.length === 0) return <div>Nenhum projeto encontrado</div>
    return(
        <CardBackground>
            {data.map((project) => (
            <CardContainer key={project.id}>
                <CardImage>
                  <img src={project.image} alt="" />              
                </CardImage>
                <CardTexts>
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div>
                            {project.features.map((feature,idx) => (
                                   <p key={idx}>{feature}</p>  
                            ))}
                        </div>
                       <i>{project.technologies}</i>
                    </div>
                    <div>
                        <button><a href={project.deploy_url}>Website</a></button>
                        <button><a href={project.github_url}>Github</a></button>      
                    </div>
                </CardTexts>
            </CardContainer>
            ))}
         </CardBackground>
        
    )
}
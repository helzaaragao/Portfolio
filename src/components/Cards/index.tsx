import React, { useEffect, useRef} from "react";
import { CardBackground, CardContainer, CardImage, CardTexts } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { GithubLogoIcon, PlayIcon } from "@phosphor-icons/react";

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
    
    const projectsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (projectsRef.current?.contains(e.target as Node)) {
        e.preventDefault();
        projectsRef.current.scrollTop += e.deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

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
                        <button><a href={project.deploy_url} target="_blank"><PlayIcon size={14} />Demo</a></button>
                        <button><a href={project.github_url} target="_blank"><GithubLogoIcon size={14}  />Github</a></button>      
                    </div>
                </CardTexts>
            </CardContainer>
            ))}
         </CardBackground>
        
    )
}

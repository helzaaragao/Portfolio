import React, { useEffect, useRef, useState } from "react";
import { PortfolioContainer, Profile, Projects } from "./styles";
import { Footer } from "../components/Footer";
import { Card } from "../components/Cards";


export function Portfolio(){ 
     const projectsRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const isTouchDevice = 'ontouchstart' in window;
        const handleWheel = (e: WheelEvent) => {
          if (projectsRef.current?.contains(e.target as Node)) {
            e.preventDefault();
            projectsRef.current.scrollTop += e.deltaY;
          }
        };
        if (!isTouchDevice) {
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
        }
        
      }, []);
    return(
        <PortfolioContainer>
            <Profile>
              <div>
                <h1>Olá! Eu sou a <span>Helza.</span></h1>
                <h2>Transformo ideias em código usando <span>React.js e TypeScript.</span></h2>
              </div>
              <Footer></Footer>    
            </Profile>
            <Projects ref={projectsRef}>
               <Card></Card>
            </Projects>
        </PortfolioContainer>
    )
}
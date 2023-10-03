import cellbit from '../assets/Cellbit.Skin.webp'
import Cucurucho from '../assets/Cucurucho.Icon.webp'
import rivers from '../assets/RiversStarter.Skin.webp'
import roier from '../assets/IRoier.Skin.webp'
import jaiden from '../assets/Jaiden.Skin.webp'
import styles from '../css/Participantes.module.css'
/*
import anime from 'animejs/lib/anime.es.js';
import anime1 from '../js/anime.js'
*/

export default function Parcipantes(){ 
     return(
        <picture>
            <img src={cellbit} alt=""/>
            <img src={roier}  alt="" />
            <img src={jaiden} alt="" />
        </picture>
       
     )
} 

// ver como usar o anime para fazer o loop e depois estilizar com os personagens de qsmp + ola no inicio quando entrar na pagina e quando clica no conhecer mais o disfruta a isla
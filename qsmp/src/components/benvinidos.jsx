import disfruta from '../assets/disfruta_audio.mp3'
import styles from '../css/Benvinidos.module.css'

export default function Benvinidos(){ 
    return(
        <main className={styles.principal}>
            <h1>QSMP</h1>
            <button>PRONTOS?</button>   
       { /* pode colocar os personagens como cascatas caindo talvez*/}

       
       <audio controls="controls"src={disfruta} ></audio>
        </main>
    )
}
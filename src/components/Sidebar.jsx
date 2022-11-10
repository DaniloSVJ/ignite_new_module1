import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
export function  Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://static.vecteezy.com/ti/vetor-gratis/t2/2960590-abstrato-aquarela-textura-papel-de-parede-fundo-vetor.jpg" alt="" />
            <div className={styles.profile}>
                <img className={styles.avatar}src="https://avatars.githubusercontent.com/u/59839057?s=400&u=11bf0aadebb67b5fbc2b1bdf855ae2654072d3fa&v=4" alt="" />
                <strong>Danilo Sampaio Vieira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}
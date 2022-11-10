import styles from "./Herder.module.css"

import igniteLogo from '../assets/iginit-logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img className={styles.img} src={igniteLogo} alt="Logotipo do Ignite" />
            {/* <strong className={styles.header}>Ignite Feed</strong> */}
        </header>
        
    )
}
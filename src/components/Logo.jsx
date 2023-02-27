import styles from './Logo.module.css';
import logoName from '../assets/name.svg'

export function Logo () {
    return (       
            <div className={styles.interface}>
                <img src={logoName}/>
            </div>
    )
}
import styles from './Logo.module.css';
import logoName from '../assets/name.svg'

export function Logo () {
    return (       
            <div className={styles.name}>
                <img src={logoName}/>
            </div>
    )
}
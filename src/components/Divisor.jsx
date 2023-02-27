import styles from './Divisor.module.css';
import divisorImg from '../assets/divisor-bg.svg'

export function Divisor () {
    return (
        <div className={styles.divisor}>
            <img src={divisorImg} className={styles.divisor}/>
        </div>
    )
}
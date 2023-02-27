import styles from './Divisor.module.css';
import divisorImg from '../assets/divisor-bg.svg'

export function Divisor () {
    return (
        <img src={divisorImg} className={styles.divisor}/>
    )
}
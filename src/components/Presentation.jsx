import myPhoto from '../assets/my-photo.svg';
import styles from './Presentation.module.css'

export function Presentation () {
    return (
        <article>


                <div className={styles.content}>
                    <div className={styles.myphoto}>
                        <img src={myPhoto} />
                    </div>
                    <div className={styles.description}>
                        <h1>Marcos Mesquita</h1>
                        <p>Meu nome é Marcos, tenho 22 anos e sou um cara muito centrado </p>
                    </div>
                </div>
        </article>
    )
}
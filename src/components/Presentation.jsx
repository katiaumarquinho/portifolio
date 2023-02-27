import myPhoto from '../assets/my-photo.svg';
import styles from './Presentation.module.css'

export function Presentation () {
    return (
        <article>


                <div className={styles.content}>

                    <img className={styles.myphoto} src={myPhoto} />
                    <div>
                        <h1>Marcos Mesquita</h1>
                        <p>meu nome é marcos, tenho 22 anos, gosto de jogos, faço pixelart, gosto de makonha</p>
                    </div>
                </div>
        </article>
    )
}
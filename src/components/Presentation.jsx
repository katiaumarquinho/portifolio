import myPhoto from '../assets/my-photo.svg';
import styles from './Presentation.module.css'
import stars from '../assets/stars.svg'

export function Presentation () {
    return (
        <article>
                <div className={styles.container}>
                    <div className={styles.containerMyphoto}>
                        <img src={myPhoto} />
                            <div>
                                <img src={stars} />
                            </div>
                    </div>
                    <div className={styles.description}>
                        <h1>Marcos Mesquita</h1>
                        <br/>
                            <p>Me chamo Marcos, tenho 22 anos, sou do interior do Rio de Janeiro, Petrópolis. Sou Web Developer com conhecimento em HTML, CSS, Javascipt e ReactJS. 
                            O meu primeiro contato com programação se deu aos 15 anos de idade, quando no ensino médio tive a oportunidade fazer um curso complementar de computação.
                            Logo após, comecei a jogar profissionalmente o jogo Counter-Strike:Global Offensive. Em 2019 dei início ao curso da Udemy sobre HTML, CSS e Javascript,
                            já em 2022 dei início aos estudos pela RocketSeat voltados a ReactJS, além de todo o conteúdo complementar com apostilas online e vídeos no youtube. Ademais, iniciei 2023
                            com a faculdade em Análise e Desenvolvimento de Sistemas.
                            <br/>
                            Junto ao meu desenvolvimento enquanto Dev, também dei início aos estudos sobre pixelart, um estilo artístico geralmente voltado para jogos, que está em alta no momento.
                            A minha paixão por tecnologia e jogos, criam as condições ideais para que no futuro eu possa me tornar um Dev completo e também um artista com grande repertório artísico.
                            </p>
                    </div>
                </div>
        </article>
    )
}
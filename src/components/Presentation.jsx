import myPixelPhoto from "../assets/my-photo.svg";
import myAlivePhoto from "../assets/alive-photo.jpg"
import styles from "./Presentation.module.css";
import { useState, useCallback, useEffect } from "react";

export function Presentation() {
  const [open, setOpen] = useState(false);
  const getStyle = useCallback(() => {
    return {
      display: open ? "flex" : "none",
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 4,
      backgroundColor: "rgb(6,0,26,0.8)",
      alignItems: "center",
      justifyContent: "center",
    };
  }, [open]);

  useEffect(() => {
    const zoomInAnimation = `@keyframes zoomIn {
      from { transform: scale(0.1); }
      to { transform: scale(1); }
    }`;
    const zoomOutAnimation = `@keyframes zoomOut {
      from { transform: scale(1); }
      to { transform: scale(0.1); }
    }`;

    const styles = document.createElement("style");
    styles.appendChild(
      document.createTextNode(zoomInAnimation + zoomOutAnimation)
    );
    document.head.appendChild(styles);

    return () => {
      document.head.removeChild(styles);
    };
  }, []);

  const biggerPhotoStyle = {
    width: "40vw",
    animation: open ? "zoomIn 0.5s forwards" : "zoomOut 0.5s forwards",
  };

  return (
    <article>
      <div
        style={getStyle()}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <div className={styles.containerBiggerPhoto}>
          <img src={myPixelPhoto} style={biggerPhotoStyle} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerMyphoto}>
          <img src={myAlivePhoto} />
          <div>
            <img
              src={myPixelPhoto}
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
          </div>
        </div>
        <div className={styles.description}>
          <h1>Marcos Mesquita</h1>
          <br />
          <p>
            Me chamo Marcos, tenho 22 anos, sou do interior do Rio de Janeiro,
            Petrópolis. Sou Desenvolvedor WEB com conhecimento em HTML, CSS,
            Javascript e ReactJS. O meu primeiro contato com programação se deu
            aos 15 anos de idade, quando no ensino médio tive a oportunidade
            fazer um curso complementar de computação. Após concluir o ensino
            médio me matriculei em uma faculdade de filosofia, pois sou
            apaixonado por aprender coisas novas e refletir sobre ideias.
            <br />
            <br />
            Devido a problemas pessoais durante a pandemia necessitei trancar
            esse curso, mas a paixão por aprender ainda continua presente, tanto
            que em 2022 decidi voltar a computação dando início a um curso na
            Udemy sobre HTML, CSS e Javascript. No segundo semestre comecei a
            estudar o ecossistema da biblioteca ReactJS e do ambiente NodeJS com
            Express pela RocketSeat. Em adição a essas fontes complementei meus
            estudos com apostilas e vídeos no youtube e o auxílio de familiares
            que já trabalham na área a muitos anos. Agora em 2023, após ter me
            reencontrado na computação, comecei uma graduação em Análise e
            Desenvolvimento de Sistemas e planejo encontrar uma oportunidade no
            mercado de trabalho para mostrar do que sou capaz.
            <br />
            <br />
            Além de desenvolvimento, jogos também são uma paixão minha, no
            passado joguei profissionalmente o jogo Counter-Strike:Global
            Offensive. Hoje em dia estudo sobre pixelart, um estilo artístico
            geralmente utilizado nesse mundo, e que têm se popularizado. Todas
            as ilustrações e animações presentes aqui no meu site foram feitas
            por mim como resultado desses estudos.
            <br />
            <br />
            Em projetos pessoais procuro unir minha paixão por tecnologia e
            jogos, buscando sempre desenvolver coisas que possam estar
            relacionadas e aprendendo muito durante esse processo. Ao realizar
            esses projetos, encontro desafios que servem para impulsionar o meu
            crescimento e ajudam a me tornar um Dev frontend cada vez mais
            completo.
            <br />
            <br />
            Eu acredito que arte e desenvolvimento estejam relacionados, então
            assim como faço minhas artes em pixels, procuro fazer das linhas de
            código os meus pixels e da minha IDE o meu quadro.
          </p>
        </div>
      </div>
    </article>
  );
}

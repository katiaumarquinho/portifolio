import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import styles from "./App.module.css";
import horizontalSpaceShip from "./assets/horizontal-spaceship.gif";
import moon from "./assets/moon.svg";
import stars from "./assets/stars.svg";
import nebulabottom from "./assets/nebula-bottom.svg";
import nebulatop from "./assets/nebula-top.svg";
import planet from "./assets/planet.svg";
import spaceShip from "./assets/spaceship.gif";
import { Contact } from "./components/Contact";
import { Divisor } from "./components/Divisor";
import { Grid } from "./components/Grid";
import { Logo } from "./components/Logo";
import { Presentation } from "./components/Presentation";
import "./global.css";

export function App() {
  return (
    <div>
      <main {...{ className: styles.wrapper }}>
        <div className={styles.hero}>
          <ParallaxBanner
            layers={[
              {
                image: stars,
                speed: -200,
                expanded: false,
                className: "starsParallax",
              },
            ]}
            className={styles.parallax}
          >
            <figure className={styles.nebulatop}>
              <img src={nebulatop} alt="nebula" />
            </figure>
            <figure className={styles.planet}>
              <Parallax
                style={{
                  transformOrigin: "bottom left",
                  zIndex: "2",
                  position: "relative",
                }}
                scale={[1, 0.75]}
              >
                <img
                  className={styles.earth}
                  src={planet}
                  alt="planeta terra"
                />
              </Parallax>
              <Parallax
                style={{
                  bottom: "100%",
                  left: "5rem",
                  position: "absolute",
                  zIndex: "1",
                }}
                translateX={["0px", "200px"]}
                translateY={["-100px", "300px"]}
                rotate={[260, 360]}
                speed={-5}
              >
                <img className={styles.moon} src={moon} alt="lua" />
              </Parallax>
            </figure>
            <figure className={styles.nebulabottom}>
              <img src={nebulabottom} alt="nebula" />
            </figure>
            <figure className={styles.spaceshipWrapper}>
              <img
                className={styles.spaceShip}
                src={spaceShip}
                alt="aspaço nave"
              />
            </figure>
            <figure className={styles.horizontal}>
              <img
                className={styles.horizontalSpaceShip}
                src={horizontalSpaceShip}
                alt="aspaço nave"
              />
            </figure>

            <Logo />
            <Divisor />
          </ParallaxBanner>
        </div>

        <Presentation />
        <Grid />
        <Contact />
      </main>
    </div>
  );
}

import { Logo } from './components/Logo'
import useScrollPosition from "./useScrollPosition";
import styles from './App.module.css'
import './global.css'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Divisor } from './components/Divisor'
import moon from './assets/moon.svg'
import planet from './assets/planet.svg'
import nebulatop from './assets/nebula-top.svg'
import nebulabottom from './assets/nebula-bottom.svg'
import horizontalSpaceShip from './assets/horizontal-spaceship.gif'
import spaceShip from './assets/spaceship.gif'
import useMousePosition from './useMousePosition'

export function App() {

  const [x, y, bind] = useMousePosition();
  console.log(x, y);

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return( 
    <div>

 

      <main {...{className: styles.wrapper}}>
        <div className={styles.hero} {...bind} style={{'--mouse-movement-x': x + 'px', '--mouse-movement-y': y + 'px', '--scroll-movement': scrollPosition}}>
          <figure className={styles.nebulatop}>
            <img src={nebulatop} alt='nebula'/>
          </figure>
          <figure className={styles.planet}>
            <img className={styles.earth} src={planet} alt='planeta terra'/>
            <img className={styles.moon} src={moon} alt='lua'/>
          </figure>
          <figure className={styles.nebulabottom}>
            <img src={nebulabottom} alt='nebula'/>
          </figure>
          <figure className={styles.spaceshipWrapper}>
            <img className={styles.spaceShip} src={spaceShip} alt='aspaço nave'/>
          </figure>
          <figure className={styles.horizontal}>
            <img className={styles.horizontalSpaceShip} src={horizontalSpaceShip} alt='aspaço nave'/> 
          </figure>


          <Logo />
          <Divisor />
        </div>

          <Presentation />
      </main>


    </div>
  )
}

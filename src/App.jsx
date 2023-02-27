import { Logo } from './components/Logo'
import styles from './App.module.css'
import './global.css'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Divisor } from './components/Divisor'

export function App() {

  return( 
    <div>

 

      <main className={styles.wrapper}>
          <Logo />
          <Divisor />
          <Presentation />
      </main>


    </div>
  )
}

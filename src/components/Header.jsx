import { useEffect, useState } from "react"
import styles from "./Header.module.css"

export function Header () {

    const [offset, setOffset] = useState(0);

    useEffect (() =>{
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll',onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll); 
    },[])

    
    return (
        <header className={styles.head}>
        </header>
    )
}
import styles from "./Contact.module.css";
import {
  InstagramLogo,
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  Envelope,
  TelegramLogo,
} from "@phosphor-icons/react";

export function Contact() {
  return (
    <footer className={styles.contactWrapper}>
      <div className={styles.contactContent}>
        <div className={styles.socialMidia}>
          <a href="https://twitter.com/bromiosdiox" target="_blank">
            <TwitterLogo size={24} weight="fill" />
          </a>
          <a href="https://www.instagram.com/katiaumarquinho/" target="_blank">
            <InstagramLogo size={24} weight="fill" />
          </a>
          <a href="https://github.com/katiaumarquinho" target="_blank">
            <GithubLogo size={24} weight="fill" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-mesquita-bb3b88231/"
            target="_blank"
          >
            <LinkedinLogo size={24} weight="fill" />
          </a>
          <a href="mailto:marcosmesquita80@gmail.com" target="_blank">
            <Envelope size={24} weight="fill" />
          </a>
          <a href="https://t.me/katiaumarquinho" target="_blank">
            <TelegramLogo size={24} weight="fill" />
          </a>
        </div>
        <div>
          <p>
            <strong>
              Aproveite para entrar em contato comigo através das redes sociais!
            </strong>
            <br />
            Tenho agenda aberta para comissões. Faço wallpapers, game assets,
            twitch overlays e outras prospostas no geral. Aceito propostas de
            trabalho como Web Developer.
          </p>
        </div>
      </div>
    </footer>
  );
}

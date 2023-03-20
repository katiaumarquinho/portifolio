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
        <div>
          <a href="https://twitter.com/bromiosdiox">
            <TwitterLogo size={24} weight="fill" />
            <span>Twitter</span>
          </a>
          <a href="https://www.instagram.com/marquim_relampago/">
            <InstagramLogo size={24} weight="fill" />
            <span>Instagram</span>
          </a>
          <a href="https://github.com/katiaumarquinho">
            <GithubLogo size={24} weight="fill" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/marcos-mesquita-bb3b88231/">
            <LinkedinLogo size={24} weight="fill" />
            <span>Linkedin</span>
          </a>
          <a href="mailto:marcosmesquita80@gmail.com">
            <Envelope size={24} weight="fill" />
            <span>E-mail</span>
          </a>
          <a href="https://t.me/katiaumarquinho">
            <TelegramLogo size={24} weight="fill" />
            <span>Telegram</span>
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

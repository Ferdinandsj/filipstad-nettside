import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <h2 className={styles.subTitle}>Prosjekt Filipstad</h2>
          <h1 className={styles.h1}>Estetisk veileder</h1>
        </div>
        <Link
          className={styles.downloadBtn}
          href="https://www.dropbox.com/sh/tmix7kmjqbep51c/AABRyh434fDUuI25iyisQKvJa/Estetisk%20veileder?dl=0&preview=Filipstad+-+et+forslag+til+estetisk+veileder.pdf&subfolder_nav_tracking=1"
        >
          Last ned veilederen
        </Link>
        <Image
          className={styles.bgImg}
          src="/Forsidebilde.webp"
          width={1000}
          height={1000}
          alt="Forsidebilde"
          quality={100}
        />
      </main>
      <div className={styles.sponsorsSection}>
        <h3 className={styles.sponsors}>En stor takk til</h3>

        <div className={styles.sponsorList}>
          <div className={styles.listDiv}>
            <b className={styles.b}>Veilederne</b>
            <p>
              Sanna Maria Härmä, Kristine Holte, Kurt Singstad, Juni Norløv
              Teigene, Dagny Thurmann-Moe
            </p>
          </div>

          <div className={styles.listDiv}>
            <b className={styles.b}>Linjeforeningene</b>
            <p>Broderskabet, Terra Forma, Leonardo & Struktura</p>
          </div>

          <div className={styles.listDiv}>
            <b className={styles.b}>Sponsorene</b>
            <p>Sto, Asak Miljøstein & Wieneberger</p>
          </div>
        </div>
      </div>
    </div>
  );
}

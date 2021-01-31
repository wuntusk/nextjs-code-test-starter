import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ProgramsElement } from '../components/programs';
import { Residents } from '../components/residents';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.title}>Programs</h1>
            <ProgramsElement />
          </div>
          <div>
            <h1 className={styles.title}>Residents</h1>
            <Residents />
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

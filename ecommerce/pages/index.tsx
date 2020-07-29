import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce</title>
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Visit my<a href="https://github.com/jowpurcinelli">GitHub</a>
        </h1>

        <p className={styles.description}>
          UnderDevelopment{' '}
          <code className={styles.code}>/ coding</code>
        </p>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

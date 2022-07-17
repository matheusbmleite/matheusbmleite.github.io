import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matheus Leite</title>
        <meta name="description" content="Matheus Leite | Full-stack and Android Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Matheus Leite</h1>
              <h2>Full-stack &amp; Android Developer</h2>
            </div>
            <div className="col-12">
              <a href="https://www.linkedin.com/in/matheusbmleite" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

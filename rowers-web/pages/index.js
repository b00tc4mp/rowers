import Head from 'next/head'
import Intro from '../components/Intro'
import Solutions from '../components/Solutions'
import styles from '../styles/Home.module.css'
import How from '../components/how'
import Costumers from '../components/costumers'
import SuccessCases from '../components/SuccessCases'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>ROWERS</h1>
       <Intro />
       <Solutions/>
       <How/>
       <Costumers/>
       <SuccessCases/>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

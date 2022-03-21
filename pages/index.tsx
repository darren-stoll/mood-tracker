import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { AnimalImage } from '../components/AnimalImage'

const Home: NextPage = () => {

  return (
    <div className="container">
      <Head>
        <title>Mood Tracker</title>
        <meta name="description" content="Darren Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Mood Tracker</h1>
        <AnimalImage />
        <p>This mood tracker uses Next.js for the frontend and local storage for the backend. Track your mood with timestamps and comments from time to time.</p>
        <div className={styles.links}>
          <Button value="NEW ENTRY" link="MoodEntry" />
          <Button value="MOOD HISTORY" link="MoodHistory" />
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Home

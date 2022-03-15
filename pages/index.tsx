import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import dogImage from '../public/images/pexels-chevanon-photography-1108099.jpg'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Mood Tracker</title>
        <meta name="description" content="Generated by ME et al" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Mood Tracker</h1>
        <div className={styles.image}>
          <Image src={dogImage} alt="Find happiness" width={800} height={600} />
        </div>
        <p>This mood tracker uses Next.js for the frontend and local storage for the backend. Track your mood with timestamps and comments from time to time.</p>
        <div className={styles.links}>
          <Button value="NEW" link="MoodEntry" />
          <Button value="HISTORY" link="MoodHistory" />
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Home

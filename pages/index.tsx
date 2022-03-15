import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import dogImage from '../public/images/pexels-chevanon-photography-1108099.jpg'
import axios from 'axios'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");

  // Generate an image from one of several animal APIs randomly selected
  useEffect(() => {
    const ANIMALAPICOUNT = 2;
    const PICKANAPI = Math.ceil(Math.random() * ANIMALAPICOUNT);

    if (PICKANAPI === 1) {
      axios.get('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
          setImage(response.data.message)
          setLoading(false)
        });
    }
    else if (PICKANAPI === 2) {
      axios.get('https://api.thecatapi.com/v1/images/search')
        .then((response) => {
          setImage(response.data[0].url)
          setLoading(false)
        });
    }
  }, []);
    

  if (loading) {
    return (
    <div className="container">
      <Head>
        <title>Mood Tracker</title>
        <meta name="description" content="Darren Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Loading...</h1>
      </main>
    </div>
    )
  }

  return (
    <div className="container">
      <Head>
        <title>Mood Tracker</title>
        <meta name="description" content="Darren Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Mood Tracker</h1>
        <div className={styles.image}>
          <Image src={image} alt="Find happiness" layout="fill" objectFit="contain" />
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

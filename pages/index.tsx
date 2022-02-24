import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '../components/Button'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Mood Tracker</title>
        <meta name="description" content="Generated by ME et al" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div style={{paddingBottom:"20px",position:"relative", height:"400px", width:"300px"}}>
          <Image src="/../public/images/pexels-chevanon-photography-1108099.jpg" alt="Find happiness" layout='fill' objectFit="contain" />
        </div>
        <div>
          <Button value="NEW" link="MoodEntry" />
        </div>
        <div>
          <Button value="HISTORY" link="MoodHistory" />
        </div>
      </main>

    </div>
  )
}

export default Home

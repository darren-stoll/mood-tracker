import styles from '../styles/AnimalImage.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const AnimalImage = () => {
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

  return (
    <>
      {loading ? 
        <div className={styles.image}><h2>Loading...</h2></div> : 
        <div className={styles.image}><Image src={image} alt="Find happiness" layout="fill" objectFit="contain" /></div>
      }
    </>
  )
}

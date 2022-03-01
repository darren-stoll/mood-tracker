import styles from '../styles/MoodEntry.module.css'
import { Footer } from '../components/Footer'
import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'

const MoodEntry = () => {
  // State that holds selected mood
  const [mood, setMood] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const addToStorage = () => {
    localStorage.setItem(new Date().getTime().toString(), JSON.stringify({mood, comment}))
  }

  const handleFormSubmission = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (mood !== '') {
      setError('');
      addToStorage();
      Router.push("/MoodHistory");
    }
    else {
      setError('Mood emoji not selected.');
    }
  }

  return (
    <div className="container">
      <main className="main">
        <form onSubmit={handleFormSubmission}>
          <div className={styles.entry}>
            <div className={styles.emojis}>
              <div onClick={() => setMood('😃')}>😃</div>
              <div onClick={() => setMood('😎')}>😎</div>
              <div onClick={() => setMood('😐')}>😐</div>
              <div onClick={() => setMood('☹️')}>☹️</div>
              <div onClick={() => setMood('😠')}>😠</div>
            </div>
            <div className={styles.commentBox}>
              <textarea placeholder="Reason/Cause" onChange={e => setComment(e.target.value)}></textarea>
            </div>
            <input className={styles.submitAnchor} type='submit' value='Submit' />
          </div>
        </form>
        <div className={styles.errorField}>{error}</div>
      </main>
      <Footer />
    </div>
  )
}

export default MoodEntry
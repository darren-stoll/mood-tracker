import Router from "next/router"
import React, { useState } from "react"
import { EmojiButton } from "../components/EmojiButton"
import { Footer } from "../components/Footer"
import styles from "../styles/mood_entry.module.css"

const MoodEntry = () => {
  // State that holds selected mood
  const [mood, setMood] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState<string | null>();

  const addToStorage = () => {
    localStorage.setItem(new Date().toISOString(), JSON.stringify({mood, comment}))
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
              <EmojiButton value="😃" setMood={setMood} currentValue={mood} />
              <EmojiButton value="😎" setMood={setMood} currentValue={mood} />
              <EmojiButton value="😐" setMood={setMood} currentValue={mood} />
              <EmojiButton value="☹️" setMood={setMood} currentValue={mood} />
              <EmojiButton value="😠" setMood={setMood} currentValue={mood} />
            </div>
            <div className={styles.commentBox}>
              <textarea placeholder="Reason/Cause" onChange={e => setComment(e.target.value)}/>
            </div>
            <input className={styles.submitAnchor} type='submit' value='SUBMIT' />
          </div>
        </form>
        {error && <div className={styles.errorField}>{error}</div>}
      </main>
      <Footer />
    </div>
  )
}

export default MoodEntry

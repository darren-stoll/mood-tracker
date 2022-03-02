import styles from '../styles/MoodEntry.module.css'
import { Footer } from '../components/Footer'
import React, { Dispatch, SetStateAction, useState, FC } from 'react'
import Router from 'next/router'

type EmojiButtonProps = {
  emoji: string,
  setMood: Dispatch<SetStateAction<string>>;
}

const EmojiButton:FC<EmojiButtonProps> = ({ emoji, setMood }) => {

  const changeBackgroundOnHover = (e:any) => {
    e.target.style.background = 'lightblue';
  }

  const changeBackgroundOffHover = (e:any) => {
    e.target.style.background = 'none';
  }

  return (
    <div 
      className={styles.emoji} 
      onMouseOver={changeBackgroundOnHover} 
      onMouseOut={changeBackgroundOffHover} 
      onClick={() => setMood(emoji)}>
        {emoji}
    </div>
  )
}

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
              <EmojiButton emoji="😃" setMood={setMood} />
              <EmojiButton emoji="😎" setMood={setMood} />
              <EmojiButton emoji="😐" setMood={setMood} />
              <EmojiButton emoji="☹️" setMood={setMood} />
              <EmojiButton emoji="😠" setMood={setMood} />
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
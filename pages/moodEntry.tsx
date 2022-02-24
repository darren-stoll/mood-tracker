import styles from '../styles/MoodEntry.module.css'
import { Footer } from '../components/Footer'
import { useState } from 'react'
import Link from 'next/link'

const MoodEntry = () => {
  // State that holds selected mood
  const [mood, setMood] = useState('');
  const [comment, setComment] = useState('');

  return (
    <div className="container">
      <main className="main">
        <div className={styles.entry}>
          <div className={styles.emojis}>
            <div onClick={() => setMood('overjoyed')}>😃</div>
            <div onClick={() => setMood('confident')}>😎</div>
            <div onClick={() => setMood('apathetic')}>😐</div>
            <div onClick={() => setMood('despairing')}>☹️</div>
            <div onClick={() => setMood('angry')}>😠</div>
          </div>
          <div className={styles.commentBox}>
            <textarea placeholder="Reason/Cause" onChange={e => setComment(e.target.value)}></textarea>
          </div>
          {/* Have it link to a confirmation window, which redirects to history after 5 seconds */}
          <div className={styles.submit}>
            <Link href="/">
              <a className={styles.submitAnchor}>Submit</a>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MoodEntry
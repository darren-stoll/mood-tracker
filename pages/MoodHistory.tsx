import styles from '../styles/MoodHistory.module.css'
import { Footer } from '../components/Footer'
import { FC } from 'react'
import { format, compareDesc } from 'date-fns'

type MoodProps = {
  time: number,
  mood: string,
  comment: string
}

const allStorage = () => {
  // Store the localStorage into an array
  const tempLocalStorage:any = []
  const keys = Object.keys(localStorage);
  for (let i = 0; i < keys.length; i++) {
    const item = localStorage.getItem(keys[i]);
    tempLocalStorage.push({time: keys[i], item})
  }

  // Filter the moods from localStorage into its own array
  const moods:MoodProps[] = [];
  for (let i = 0; i < tempLocalStorage.length; i++) {
    if (Number(tempLocalStorage[i].time)) {
      const objectifyItem = JSON.parse(tempLocalStorage[i].item);
      moods.push({
        time: parseInt(tempLocalStorage[i].time),
        mood: objectifyItem.mood,
        comment: objectifyItem.comment
      })
    }
  }

  // Sort the moods by timestamp
  moods.sort((a,b) => {
    return compareDesc(a.time, b.time)
  })

  return moods;
}



const MoodListEntry:FC<MoodProps> = ({time, mood, comment}) => {
  return (
    <div className={styles.entry}>
      <div className={styles.datemood}>
        {format(new Date(time), "EEE, MM/dd/yy, h:mm aa")}
        {" - "}
        {mood}
      </div>
      {comment !== "" ? comment : ""}
    </div>
  )
}

const MoodHistory = () => {
  const moods = allStorage();

  return (
    <div className="container">
      <main className="main">
        <div className="entries">
          {moods.map(m => (
            <MoodListEntry key={m.time} time={m.time} mood={m.mood} comment={m.comment} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MoodHistory
